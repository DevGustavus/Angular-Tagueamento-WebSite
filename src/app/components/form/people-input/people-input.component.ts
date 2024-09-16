import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-people-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './people-input.component.html',
  styleUrl: './people-input.component.scss',
})
export class PeopleInputComponent {
  isDropdownOpen = false;

  // Definindo uma pessoa já selecionada
  selectedOption: { id: string; name: string; img: string } | null = {
    id: 'listbox-option-3',
    name: 'Tom Cook',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=faces&fit=crop&w=256&h=256&q=80',
  };

  options = [
    {
      id: 'listbox-option-0',
      name: 'Wade Cooper',
      img: 'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 'listbox-option-1',
      name: 'Arlene Mccoy',
      img: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 'listbox-option-2',
      name: 'Devon Webb',
      img: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 'listbox-option-3',
      name: 'Tom Cook',
      img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=faces&fit=crop&w=256&h=256&q=80',
    },
    {
      id: 'listbox-option-4',
      name: 'Tanya Fox',
      img: 'https://images.unsplash.com/photo-1564564295391-7f24f26f568b?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 'listbox-option-5',
      name: 'Hellen Schmidt',
      img: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  ];

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectOption(option: { id: string; name: string; img: string }) {
    this.selectedOption = option;
    this.isDropdownOpen = false; // Fechar o dropdown após a seleção
  }
}
