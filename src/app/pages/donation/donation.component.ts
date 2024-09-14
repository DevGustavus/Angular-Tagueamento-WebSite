import { Component } from '@angular/core';
import { FooterComponent } from "../../components/footer/footer.component";
import { ProductListComponent } from "../../components/product-list/product-list.component";
import { FormInputsComponent } from "../../components/form/form-inputs/form-inputs.component";

@Component({
  selector: 'app-donation',
  standalone: true,
  imports: [FooterComponent, ProductListComponent, FormInputsComponent],
  templateUrl: './donation.component.html',
  styleUrl: './donation.component.scss'
})
export class DonationComponent {

}
