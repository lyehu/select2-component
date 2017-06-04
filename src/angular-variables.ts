export const srcAngularTemplateHtml = `<div [class]="containerStyle"><div class="selection" (click)="toggleOpenAndClose()"><div class="select2-selection select2-selection--single" role="combobox"><span class="select2-selection__rendered" [title]="optionLabel">{{optionLabel}}</span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></div></div><div [class]="dropdownStyle"><div class="select2-dropdown select2-dropdown--below"><div [class]="searchStyle"><input #searchInput [(ngModel)]="searchText" (keydown)="keyDown($event)" (focusout)="focusout()" class="select2-search__field" type="search" role="textbox" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"></div><div class="select2-results"><ul #results class="select2-results__options" role="tree" tabindex="-1" (keydown)="keyDown($event)" (focusout)="focusout()"><ng-container *ngFor="let groupOrOption of filteredData"><li *ngIf="groupOrOption.options" class="select2-results__option" role="group"><strong class="select2-results__group">{{groupOrOption.label}}</strong><ul class="select2-results__options select2-results__options--nested"><li *ngFor="let option of groupOrOption.options" [class]="getOptionStyle(option.value)" role="treeitem" [attr.aria-selected]="option.value === value ? 'true' : 'false'" [attr.aria-disabled]="option.disabled ? 'true' : 'false'" (mouseenter)="mouseenter(option)" (click)="click(option)">{{option.label}}</li></ul></li><li *ngIf="!groupOrOption.options" [class]="getOptionStyle(groupOrOption.value)" role="treeitem" [attr.aria-selected]="groupOrOption.value === value ? 'true' : 'false'" [attr.aria-disabled]="groupOrOption.disabled ? 'true' : 'false'" (mouseenter)="mouseenter(groupOrOption)" (click)="click(groupOrOption)">{{groupOrOption.label}}</li></ng-container></ul></div></div></div></div>`;
