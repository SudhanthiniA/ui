import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService, AuthService, AlertService } from '@app/services';
import { MatTableDataSource } from '@angular/material/table';
import { NotificationListConfig } from '@app/config/table-config/notification-list-config';
import { Notification } from '@app/models/notification';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  pageNo = 0;
  public actionKeys = [];
  public pageSize = 5;
  public totalCount: number;

  public columns = NotificationListConfig.columns;
  public dataSource = new MatTableDataSource<Notification>();
  notificationList: Notification[];

  constructor(
    private router: Router,
    private alert: AlertService,
    private authService: AuthService,
    private notificationSer: NotificationService,
  ) { }

  ngOnInit() {
    this.getNotifications();
  }

  handlePagination(event) {
    console.log('Parent-handlePagination', event);
    const pageNo = event.currentPage;
    const pageSize = event.pageSize;
    this.getNotifications(pageNo, pageSize);
  }

  getNotifications(page = 0, pageSize = 5) {
    const searchObj = {
      page,
      pageSize
    };
    this.notificationSer.findAllNotification(searchObj).subscribe((resp: any) => {
      const { responseCode, content: respCont } = resp;
      if (responseCode === 200 && respCont) {
        const { totalElements, content: respDataCon } = respCont;
        this.totalCount = totalElements;
        this.notificationList = respDataCon;
        this.dataSource.data = respDataCon as Notification[];
      }
    });
  }

}
