<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    public function index ()
    {
        $products = Product::all();
        return response()->json($products);
    }

    public function create (Request $request)
    {
        $this->validate($request,[
            'category_id' => 'required',
            'name' => 'required',
            'price' => 'required',
            'color' => 'required',
            'size' => 'required',
        ]);

        if($request->hasFile('img')){
            $file = $request->file('img');
            $filename = 'product_'.time().'.'.$file->extension();
            $file->move(public_path('uploads'), $filename);
        } else {
            return response()->json(['error' => 'Image file not found!!!'], 422);      
        }

        $product = Product::create([
            'category_id' => $request->input('category_id'),
            'name' => $request->input('name'),
            'avatar' => $filename,
            'price' => $request->input('price'),
            'color' => $request->input('color'),
            'size' => $request->input('size'),
        ]);
        
        return response()->json('Product created!');
    }

    public function show ($id)
    {
        $product = Product::find($id);
        return response()->json($product);
    }

    public function update ($id)
    {
        echo 'productEditing'.$id;
    }

    public function destroy ($id)
    {
        $product = Product::find($id);

        if (! $product) {
            return response()->json(['error' => 'Product not found!!!']);
        }
        $product->delete();

        return response()->json('Successfully deleted this product!');
    }
}
