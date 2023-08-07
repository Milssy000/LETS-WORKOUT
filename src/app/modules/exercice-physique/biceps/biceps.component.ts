import { Component, OnInit } from '@angular/core';
import { SpiderService } from 'src/app/services/spider.service';

@Component({
  selector: 'app-biceps',
  templateUrl: './biceps.component.html',
  styleUrls: ['./biceps.component.scss']
})
export class BicepsComponent implements OnInit {
  data: any;
  url: string = 'https://api.api-ninjas.com/v1/exercises?muscle=biceps';
  dataService: any;
i: any;

  constructor(private spiderService: SpiderService){
  
  }

  ngOnInit(): void {
    this.getData()
  }

  
  getData(): void{

    // this.spiderService.getConfig(this.url).subscribe((data: any) => {
    //   this.data = data;

    // console.log(data)
    // })
    this.spiderService.sendData().subscribe({ next: (data) => { 
      this.data=data
      console.log(data);
      
    } })


// this.getData();
}
} 

 

