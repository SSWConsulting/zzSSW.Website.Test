import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SafePipe } from 'src/app/modules/general/common/safe.pipe';
import { EmbedLinkedItemsPipe } from 'src/app/modules/general/common/embed-linked-items.pipe';
import { RemoveObjectPipe } from 'src/app/modules/general/common/remove-object.pipe';
import { StrongFirstWordPipe } from 'src/app/modules/general/common/strong-first-word.pipe';
import { StrongFirstWordH1Pipe } from 'src/app/modules/general/common/strong-first-word-h1.pipe';


@NgModule({
  declarations: [
    SafePipe,
    EmbedLinkedItemsPipe,
    RemoveObjectPipe,
    StrongFirstWordPipe,
    StrongFirstWordH1Pipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SafePipe,
    EmbedLinkedItemsPipe,
    RemoveObjectPipe,
    StrongFirstWordPipe,
    StrongFirstWordH1Pipe
  ]
})
export class SSWCommonModule { }
