import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { ItemService, Item } from '../../services/item.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  standalone: true,
  imports: [FormsModule], // Add FormsModule here
})
export class ItemEditComponent implements OnInit {
  item!: Item; // Ensure item is declared correctly
  id!: number;

  constructor(
    private itemService: ItemService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id')); // Extract ID
    this.itemService.getItemById(this.id).subscribe(data => {
      this.item = data;
    });
  }

  updateItem(): void {
    const updatedItem = { ...this.item, id: this.id };
    this.itemService.updateItem(updatedItem).subscribe(() => {
      this.router.navigate(['/items']);
    });
  }


  deleteItem(): void {
    this.itemService.deleteItem(this.id).subscribe(() => {
      this.router.navigate(['/items']);
    });
  }
}
