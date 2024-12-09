import { Item } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { DataService, Item } from '../data.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
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
  message = '';
  updateTutorial(): void {
    const itemToUpdate: Item = {
      id: this.editItemId || 0, // Assuming editItemId is a number or null
      name: this.items.find(item => item.id === this.editItemId)?.name || '' // Assuming name is a string
    };

    this.dataService.updateItem(itemToUpdate)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.editItemId ? res.editItemId : 'This tutorial was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  deleteItem(id: number) {
    this.dataService.deleteItem(id).subscribe({
      next: () => {
        this.items = this.items.filter(item => item.id !== id);
      },
      error: (err) => {
        console.error('Error deleting item:', err);
      }
    });
  }
}
