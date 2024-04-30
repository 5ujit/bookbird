import React from "react";
import Navbar from "../components/Navbar";

const Card = ({ title, imageUrl, pdfUrl }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg">
      <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <div className="flex justify-between">
          <a href={pdfUrl} className="text-blue-500 hover:underline">PDF</a>
        </div>
      </div>
    </div>
  );
};

const Books = () => {
  return (
    <div className="bg-gray-200 min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Featured Books</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <Card title="Book 1" imageUrl="https://www.crossword.in/cdn/shop/products/81t2k1qmWgL.jpg?v=1685528431" pdfUrl="https://drive.google.com/file/d/1_8cvORZdqAzGScRU7o2fTHHyPzFH6Nzs/view?usp=drive_link" />
          <Card title="Book 2" imageUrl="https://markmanson.net/wp-content/themes/mm-main/images/books-subtle-art.png" pdfUrl="https://drive.google.com/file/d/1sTbGwRMELNOJbvbtspRoTQIaKk3sWKzp/view?usp=sharing" />
          <Card title="Book 3" imageUrl="https://m.media-amazon.com/images/I/61nTspM+BYL._AC_UF1000,1000_QL80_.jpg" pdfUrl="https://drive.google.com/file/d/1CzpvZ3FmfJKMZpVCi8Du6uCBh2gA05wk/view?usp=sharingf" />
          <Card title="Book 4" imageUrl="https://m.media-amazon.com/images/I/51SareCmCFL.jpg" pdfUrl="https://example.com/book4.pdf" />
          <Card title="Book 5" imageUrl="https://m.media-amazon.com/images/I/51xwFZin4pL._AC_UF894,1000_QL80_.jpg" pdfUrl="https://example.com/book5.pdf" />
          <Card title="Book 6" imageUrl="https://m.media-amazon.com/images/I/71AdHA+qqwL._AC_UF894,1000_QL80_.jpg" pdfUrl="https://www.henryarmstrongfoundation.org/f/think-and-grow-rich-napoleon-hill_text[1].pdf333.pdf" />
          <Card title="Book 1" imageUrl="https://www.crossword.in/cdn/shop/products/81t2k1qmWgL.jpg?v=1685528431" pdfUrl="https://example.com/book1.pdf" />
          <Card title="Book 2" imageUrl="https://markmanson.net/wp-content/themes/mm-main/images/books-subtle-art.png" pdfUrl="https://example.com/book2.pdf" />
          <Card title="Book 3" imageUrl="https://m.media-amazon.com/images/I/61nTspM+BYL._AC_UF1000,1000_QL80_.jpg" pdfUrl="https://example.com/book3.pdf" />
          <Card title="Book 4" imageUrl="https://m.media-amazon.com/images/I/51SareCmCFL.jpg" pdfUrl="https://example.com/book4.pdf" />
          <Card title="Book 5" imageUrl="https://m.media-amazon.com/images/I/51xwFZin4pL._AC_UF894,1000_QL80_.jpg" pdfUrl="https://example.com/book5.pdf" />
          <Card title="Book 6" imageUrl="https://m.media-amazon.com/images/I/71AdHA+qqwL._AC_UF894,1000_QL80_.jpg" pdfUrl="https://example.com/book6.pdf" />
        </div>
      </div>
    </div>
  );
};

export default Books;
