import { Component, OnInit } from '@angular/core';
import { DataService, Item } from '../data.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-items',
  standalone: true,
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
  imports: [CommonModule, FormsModule]
})
export class ItemsComponent implements OnInit {
  items: Item[] = [];
  newItemName: string = '';
  editItemId: number | null = null;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.loadItems();
  }

  loadItems() {
    this.dataService.getItems().subscribe((data) => {
      this.items = data;
    });
  }

  addItem() {
    if (this.newItemName) {
      const newItem: Item = {
        name: this.newItemName,
        id: 0
      };
      this.dataService.addItem(newItem).subscribe((item) => {
        this.items.push(item);
        this.newItemName = ''; // Clear input
      });
    }
  }

  editItem(id: number, name: string) {
    this.editItemId = id;
    this.newItemName = name; // Load the item name into the input for editing
  }

  deleteItem(id: number) {
    this.items = this.items.filter(item => item.id !== id);
    // Optionally, you could also call a delete method from your data service here
  }
}
