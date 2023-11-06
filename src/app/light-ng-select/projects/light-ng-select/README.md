# Angular Select

A light angular dropdown component

## Installation

```bash
$ npm i light-ng-select
```

Import `LightNGSelectModule` in your app:

```typescript
import { NgModule } from '@angular/core';
import { LightNGSelectModule } from 'light-ng-select';


@NgModule({
  imports: [LightNGSelectModule]
})
export class AppModule {}
```


### Example usage

```html
<light-ng-select [keys]="['1', '2']"></light-ng-select>
```

### Inputs

keys: Array<any> = []
selectedKey: any

default selectedKey is the first one.


### Outputs

| Output  | Description |
| ------------- | ------------- |
| (key)  | Fired when item is selected |
