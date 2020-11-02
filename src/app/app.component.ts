import {
  AfterViewInit,
  Component,
  ElementRef,
  VERSION,
  ViewChild
} from "@angular/core";
import {
  Chart,
  IChartConfiguration,
  LineController,
  LinearScale,
  Tooltip,
  Legend,
  CategoryScale,
  PointElement,
  LineElement
} from "chart.js";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'testChart';

  public chart: Chart<"line">;

  @ViewChild("myChart")
  public ctx: ElementRef;

  constructor() {
    Chart.register(
      LineController,
      LinearScale,
      CategoryScale,
      Tooltip,
      Legend,
      PointElement,
      LineElement
    );
  }

  ngAfterViewInit(): void {
    this.chart = new Chart(
      this.ctx.nativeElement as HTMLCanvasElement,
      {
        type: "line",
        data: {
          labels: ["x", "y"],
          datasets: [
            {
              label: "dataset1",
              data: [{ x: 0, y: 1 }, { x: 1, y: 1 }]
            }
          ]
        }
      } as IChartConfiguration<"line">
    );
  }
}
