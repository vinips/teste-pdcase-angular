import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

import { User } from '@app/user/user.model';

import { UserService } from '@app/user/user.service';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss']
})
export class UserSearchComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort
  @ViewChild("paginatorUser") paginator: MatPaginator

  userSearch = this.getFilterEmptyUserSearch();

  users: User[];
  displayedColumns: string[] = ["id", "username", "password", "is_enabled", "registerDate", "name", "surname", "email", "phone"];
  dataSource = new MatTableDataSource<User>(this.users);
  loading = false;
  lengthPaginator: number = 0;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.loading = false;

    if(this.sort)  {
      this.sort.direction = this.userSearch.direction == 'asc'? 'asc': 'desc';
      this.sort.active = this.userSearch.sort;
    }
    this.search();
  }

  private search() {
  this.loading = true;
  this.userService.getUsers(this.userSearch).subscribe(
    result => {
      this.dataSource = new MatTableDataSource<User>(result.list);
      this.lengthPaginator = result.length;
      this.loading = false;
    });
  }

  public reset()  {
    this.userSearch = this.getFilterEmptyUserSearch();
    this.paginator.pageIndex = 0;
    this.search()
  }

  public filter() {
    this.userSearch.pageIndex = 0;
    this.paginator.pageIndex = 0;
    this.search()
  }

  public sortTable(sort:MatSort) {
    this.sort = sort;
    this.userSearch.direction = sort? sort.direction : this.userSearch.direction;
    this.userSearch.sort = sort? sort.active : this.userSearch.sort;
    this.search();
  }

  public getFilterEmptyUserSearch()  {
    return {
      username: null,
      name: null,
      email: null,
      direction: "asc",
      sort: "name",
      pageIndex: 0,
      pageSize: 5,
     }
  }

  public paginatorTable() {
    this.userSearch.pageIndex =  this.paginator.pageIndex;
    this.userSearch.pageSize =   this.paginator.pageSize;
    this.search();
  }

}
