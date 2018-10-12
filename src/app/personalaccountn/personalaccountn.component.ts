import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import * as GlobalUrl from "../globals";
import {PersonalaccountserveService} from "./personalaccountserve.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-personalaccountn',
  templateUrl: './personalaccountn.component.html',
  styleUrls: ['./personalaccountn.component.css']
})
export class PersonalaccountnComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private getCustomers: PersonalaccountserveService, private Rou: Router) {
  }

  loading = false;
  pageIndex = 1;
  pageSize = 6;
  total = 1;
  getInfo;
  /*蒙层开关*/
  isOperating: boolean = true;
  getAccount = GlobalUrl.prioductUrl + 'account/getAccount'
  getAllTransactionsByDB = GlobalUrl.prioductUrl + 'account/getTransactionsByAddress'
  Infos;

  searchData(reset: boolean = false): void {
    if (reset) {
      this.pageIndex = 1;
    }
    this.loading = true;
    let data1 = new FormData()
    data1.append('address', '' + this.getInfo + '')
    data1.append('page', '' + this.pageIndex + '')
    this.getCustomers.getCustomerdata(this.getAllTransactionsByDB, data1, 2, 'save', this)
  }

  ngOnInit() {
    this.loading = true
    let peInfo;
    this.activatedRoute.queryParams.subscribe(queryParams => {
      peInfo = queryParams.info;
    });
    this.getInfo = peInfo
    let data1 = new FormData()
    data1.append('address', '' + peInfo + '')
    this.getCustomers.getCustomerdata(this.getAccount, data1, 1, 'save', this)
    let data2 = new FormData()
    data2.append('address', '' + peInfo + '')
    data2.append('page', '1')
    this.getCustomers.getCustomerdata(this.getAllTransactionsByDB, data2, 2, 'save', this)
  }

  dataSet = []
  perInfo = {
    "chainId": 0,
    "address": " ",
    "nonce": 0,
    "balance": " "
  }

  postOk(val, flag, distinguish) {
    if (distinguish === 1) {
      this.perInfo = val.data
    } else if (distinguish === 2) {
      this.loading = false
      this.dataSet = val.data.transactionsList.dataList
      this.total = val.data.transactionsList.total
    }
  }

  postErr(val, flag, distinguish) {
    if (distinguish === 1) {

    }
    else if (distinguish === 2) {
      this.loading = false
      this.dataSet = []
      this.total = 0
    }
  }

  postOk_other(val, flag, distinguish) {
    if (distinguish === 1) {

    }
    else if (distinguish === 2) {
      this.loading = false
      this.dataSet = []
      this.total = 0
    }
  }

  gotopireId(e)
    :
    void {
    let data1 = new FormData()
    data1.append('address', '' + e + '')
    this.getCustomers.getCustomerdata(this.getAccount, data1, 1, 'save', this)
    this.getCustomers.getCustomerdata(this.getAllTransactionsByDB, data1, 2, 'save', this)
  }

  peoSlice(e) {
    if (e === '' || e === null || e === undefined) {
      let a = ''
      return a
    } else {
      let a;
      let b = e.slice(0, 8)
      let c = e.slice(e.length - 8, e.length)
      a = b + '***' + c
      return a
    }

  }

  gotoblockInfo(e, q) {
    this.Rou.navigate(['/blockInformation'], {queryParams: {id: e, height: q}})
  }

  gotosecond(e) {
    this.Rou.navigate(['/piece'], {queryParams: {id: e}})
  }

  toHome() {
    this.Rou.navigate(['/home'])
  }

  dataReload(e) {
    this.loading = true
    this.getInfo = e
    let data1 = new FormData()
    data1.append('address', '' + e + '')
    this.getCustomers.getCustomerdata(this.getAccount, data1, 1, 'save', this)
    let data2 = new FormData()
    data2.append('address', '' + e + '')
    data2.append('page', '1')
    this.getCustomers.getCustomerdata(this.getAllTransactionsByDB, data2, 2, 'save', this)
  }
}
