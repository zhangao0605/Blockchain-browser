import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ActivatedRoute} from "@angular/router";
import * as GlobalUrl from "../globals";
import {BlockinformationserveService} from "./blockinformationserve.service";

@Component({
  selector: 'app-blockinformation',
  templateUrl: './blockinformation.component.html',
  styleUrls: ['./blockinformation.component.css']
})
export class BlockinformationComponent implements OnInit {

  constructor(private Rou: Router, private activatedRoute: ActivatedRoute, private getCustomers: BlockinformationserveService) {
  }

  getBlockHeader = GlobalUrl.prioductUrl + 'block/getBlockHeader'
  getBlockTransactions = GlobalUrl.prioductUrl + 'block/getBlockTransactions'
  loading = false;
  pageIndex = 1;
  pageSize = 6;
  total = 1;
  blockId
  blockHeight

  ngOnInit() {
    let productId;
    let height;
    let title
    this.activatedRoute.queryParams.subscribe(queryParams => {
      productId = queryParams.id;
      height = queryParams.height;
    });
    this.blockId = productId
    this.blockHeight = height
    let data1 = new FormData()
    data1.append('chainId', '' + productId + '')
    data1.append('height', '' + height + '')
    this.getCustomers.getCustomerdata(this.getBlockHeader, data1, 1, 'save', this)

    let data2 = new FormData()
    data2.append('chainId', '' + productId + '')
    data2.append('height', '' + height + '')
    data2.append('page', '1')
    data2.append('size', '6')
    this.getCustomers.getCustomerdata(this.getBlockTransactions, data2, 2, 'save', this)
  }

  blockInfo = {
    "id": null,
    "chainId": 0,
    "hash": " ",
    "txcount": 0,
    "previousHash": 0,
    "height": 0,
    "theDateString": " "
  }
  dataSet = []

  postOk(val, flag, distinguish) {
    if (distinguish === 1) {
      this.blockInfo = val.data.block
    } else if (distinguish === 2) {
      this.total = val.data.transactionsList.total
      this.dataSet = val.data.transactionsList.dataList
    }
  }

  postErr(val, flag, distinguish) {
    if (distinguish === 1) {
      this.blockInfo = {
        "id": null,
        "chainId": 0,
        "hash": " ",
        "txcount": 0,
        "previousHash": 0,
        "height": 0,
        "theDateString": " "
      }
    } else if (distinguish === 2) {
      this.loading = false
      this.dataSet = []
      this.total = 0

    }
  }

  postOk_other(val, flag, distinguish) {
    if (distinguish === 1) {
      this.blockInfo = {
        "id": null,
        "chainId": 0,
        "hash": " ",
        "txcount": 0,
        "previousHash": 0,
        "height": 0,
        "theDateString": " "
      }
    } else if (distinguish === 2) {
      this.loading = false
      this.dataSet = []
      this.total = 0

    }
  }

  gotopersonal(e) {
    this.Rou.navigate(['/personalAccount'], {queryParams: {info: e}})
  }

  toHome() {
    this.Rou.navigate(['/home'])
  }

  /*主表格分页切换数据*/
  searchData(reset: boolean = false): void {
    if (reset) {
      this.pageIndex = 1;
    }
    this.loading = true;
    let data2 = new FormData()
    data2.append('chainId', '' + this.blockId + '')
    data2.append('height', '' + this.blockHeight + '')
    data2.append('page', '' + this.pageIndex + '')
    data2.append('size', '' + this.pageSize + '')
    this.getCustomers.getCustomerdata(this.getBlockTransactions, data2, 2, 'save', this)
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
}
