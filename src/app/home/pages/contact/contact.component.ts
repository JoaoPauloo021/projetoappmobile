import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm: FormGroup;
  endereco: any;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      cep: ['', [Validators.required, Validators.pattern(/^\d{5}-\d{3}$|^\d{8}$/)]]
    });
  }

  buscarEndereco() {
    const cep = this.contactForm.value.cep;
    this.http.get(`https://viacep.com.br/ws/${cep}/json/`).subscribe(data => {
      this.endereco = data;
    });
  }

  submitForm() {
    // Lógica para enviar os dados do formulário para o servidor
    console.log(this.contactForm.value);
  }
}


