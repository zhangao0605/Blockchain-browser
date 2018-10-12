import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FirstserveService} from "./firstserve.service";
import * as GlobalUrl from '../globals'
import {SecondComponent} from "../second/second.component";

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor(private Rou: Router, private getCustomers: FirstserveService, private sec: SecondComponent) {
  }

  getMainChainStat = GlobalUrl.prioductUrl + 'block/getMainChainStat'
  getAllTxChainCount = GlobalUrl.prioductUrl + 'chain/getAllTxChainCount'
  getAllTxChain = GlobalUrl.prioductUrl + 'chain/getAllTxChain'

  ngOnInit() {
    this.loading = true;
    let data = new FormData()
    data.append('chainId', '0')
    let data1 = new FormData()
    data1.append('chainId', '1')
    let data2 = new FormData()
    data2.append('page', '1')
    this.getCustomers.getCustomerdata(this.getMainChainStat, data, 1, 'save', this)
    this.getCustomers.getCustomerdata(this.getMainChainStat, data1, 2, 'save', this)
    this.getCustomers.getCustomerdata(this.getAllTxChainCount, '', 3, 'save', this)
    this.getCustomers.getCustomerdata(this.getAllTxChain, data2, 4, 'save', this)
  }

  loading = false;
  pageIndex = 1;
  pageSize = 10;
  total = 1;
  data1_height;
  data1_commttee;
  data1_commtteeArr;
  data2_commttee;
  data2_commtteeArr;
  data3 = {
    accountCount: 0,
    currentHeight: 0,
    memberCount: 0,
    tps: 0,
    txChainCount: 4,
    txCount: 0,
  }
  dataSet = [];

  postOk(val, flag, distinguish) {
    if (distinguish === 1) {
      this.data1_height = val.data.currentheight
      this.data1_commttee = val.data.currentcomm.length
      this.data1_commtteeArr = val.data.currentcomm
      this.loading = false;
    }
    else if (distinguish === 2) {
      this.data2_commttee = val.data.currentcomm.length
      this.data2_commtteeArr = val.data.currentcomm

      this.loading = false;
    }
    else if (distinguish === 3) {
      this.data3 = val.data
    } else if (distinguish === 4) {
      this.loading = false;
      this.dataSet = val.data.chainList.dataList
      this.total = val.data.chainList.total
    }
  }

  postErr(val, flag, distinguish) {
    if (distinguish === 4) {

      this.loading = false
      this.dataSet = []
      this.total = 0
    }
  }

  postOk_other(val, flag, distinguish) {
    if (distinguish === 4) {
      this.loading = false
      this.dataSet = []
      this.total = 0
    }
  }

  gotopireId(e) {
    this.Rou.navigate(['/piece'], {queryParams: {id: e}})
  }

  blockInformation(e, q) {
    this.Rou.navigate(['/blockInformation'], {queryParams: {id: e, height: q}})
  }

  /*主表格分页切换数据*/
  searchData(reset: boolean = false): void {
    if (reset) {
      this.pageIndex = 1;
    }
    this.loading = true;
    let data2 = new FormData()
    data2.append('page', '' + this.pageIndex + '')
    this.getCustomers.getCustomerdata(this.getAllTxChain, data2, 4, 'save', this)
  }

  commttees = []
  /*蒙层开关*/
  isOperating: boolean = true;

  /*打开快捷菜单*/
  shortcut_menu_open(e, q) {
    if (e === '' && q === 2) {
      this.commttees = this.data1_commtteeArr
      this.isOperating = false
    } else if (e === '' && q === 3) {
      this.commttees = this.data2_commtteeArr
      this.isOperating = false
    } else {
      this.commttees = e
      this.isOperating = false
    }
  }

  /*关闭快捷菜单*/
  shortcut_menu_close() {
    this.isOperating = true
  }


}
