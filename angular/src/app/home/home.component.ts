import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  fotos : string;
  innercarousel = "";
  constructor(private http: Http) {}
  ngOnInit() {
    var app = {'map':'diavoorstelling'};

    
    
    this.http.post('http://localhost/angularapp/php/images.php',app)
      .subscribe(
      (res: Response) => {
        
        this.fotos = res.json();
        console.log(this.fotos);
        for(var i = 0; i <this.fotos.length; i++ )
        {
          this.innercarousel = this.innercarousel + '<div class="carousel-item active">' + '<img class="imagecarousel" src="../../assets/content/images/diavoorstelling/' + this.fotos[i]+ '" alt="First slide"></div>';
        }
      },
      (err: Error) => console.log(err)
      );
  }

}
