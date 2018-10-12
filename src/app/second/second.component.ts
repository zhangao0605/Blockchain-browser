import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ActivatedRoute} from "@angular/router";
import * as GlobalUrl from "../globals";
import {SecondserveService} from "./secondserve.service";

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  constructor(private rou: Router, private activatedRoute: ActivatedRoute, private getCustomers: SecondserveService) {
  }

  getMainChainStat = GlobalUrl.prioductUrl + 'block/getNewBlock'
  getBlockNewTx = GlobalUrl.prioductUrl + 'block/getBlockNewTx'
  blockId;
  timeClean;

  ngOnInit() {

    let productId;
    this.activatedRoute.queryParams.subscribe(queryParams => {
      productId = queryParams.id;
    });
    this.blockId = productId
    let data = new FormData()
    data.append('chainId', '' + productId + '')
    this.getCustomers.getCustomerdata(this.getMainChainStat, data, 1, 'save', this)
    let data1 = new FormData()
    data1.append('chainId', '' + productId + '')
    data1.append('page', '1')
    this.getCustomers.getCustomerdata(this.getBlockNewTx, data1, 2, 'save', this)
    this.timeCl()
  }

  timeCl() {
    let pp = this
    clearInterval(this.timeClean)
    this.timeClean = setInterval(function () {
      let data = new FormData()
      data.append('chainId', '' + pp.blockId + '')
      pp.getCustomers.getCustomerdata(pp.getMainChainStat, data, 1, 'save', pp)
      let data1 = new FormData()
      data1.append('chainId', '' + pp.blockId + '')
      data1.append('page', '1')
      pp.getCustomers.getCustomerdata(pp.getBlockNewTx, data1, 2, 'save', pp)
    }, 3000)
  }

  dataSet;
  dataSet1;

  postOk(val, flag, distinguish) {
    if (distinguish === 1) {
      console.log('1')
      this.dataSet = val.data.blockList
    } else if (distinguish === 2) {
      this.dataSet1 = val.data.transactionsList.dataList
    }
  }

  postErr(val, flag, distinguish) {

  }

  postOk_other(val, flag, distinguish) {

  }

  blockInformation(e, q) {
    clearInterval(this.timeClean)
    this.rou.navigate(['/blockInformation'], {queryParams: {id: e, height: q}})
  }

  personalAccount(e) {
    clearInterval(this.timeClean)
    this.rou.navigate(['/personalAccount'], {queryParams: {info: e}})
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
  ngOnDestroy() {
    clearInterval(this.timeClean);
  }
  toHome() {
    this.rou.navigate(['/home'])
  }
}
