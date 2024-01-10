# laravel-typescriptable-test

Repository for this issue: https://github.com/kiwilan/typescriptable-laravel/issues/46

We have this user's table migration:

```php
Schema::create('users', function (Blueprint $table) {
    $table->id();
    $table->string('name');
    $table->string('email')->unique();
    $table->enum('role', ['admin', 'default'])->default('default');
    $table->timestamp('email_verified_at')->nullable();
    $table->string('password');
    $table->rememberToken();
    $table->timestamps();
});
```

But we just get this:

```ts
// resources/js/types-models.d.ts

declare namespace App.Models {
  export interface User {
    id?: number
    email_verified_at?: Date
    password?: any
  }
}
```

**Note:** Also need to try when using relationships.
