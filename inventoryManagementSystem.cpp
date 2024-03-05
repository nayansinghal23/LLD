#include <bits/stdc++.h>
using namespace std;

enum SIZE
{
    S,
    M,
    L
};

class Product
{
    string id;
    double price;
    string description;
    SIZE size; // S, M and L
public:
    Product() {}

    Product(string id, double price, string description, SIZE size)
    {
        this->id = id;
        this->price = price;
        this->description = description;
        this->size = size;
    }

    string getId()
    {
        return this->id;
    }

    string getDescription()
    {
        return this->description;
    }

    double getPrice()
    {
        return this->price;
    }
};

class InventorySystem
{
    map<string, Product> productMap;
    map<string, int> order;

public:
    void addProduct(Product product)
    {
        this->productMap.insert({product.getId(), product});
        this->order[product.getId()]++;
    }

    Product getProduct(string productId)
    {
        return this->productMap[productId];
    }

    void removeProduct(Product product)
    {
        if (this->order.find(product.getId()) == this->order.end())
        {
            cout << "Product can't be removed as it doesn't exists in your order list" << endl;
            return;
        }
        this->order[product.getId()]--;
        if (this->order[product.getId()] == 0)
        {
            this->productMap.erase(product.getId());
            this->order.erase(product.getId());
        }
    }

    void displayProducts()
    {
        for (auto itr : this->order)
        {
            cout << this->productMap[itr.first].getDescription() << "-" << itr.second << " ";
        }
        cout << endl;
    }

    void executeOrder()
    {
        if (this->productMap.size() == 0 || this->order.size() == 0)
        {
            cout << "Nothing to pay" << endl;
            return;
        }
        double totalCost = 0;
        for (auto itr : this->order)
        {
            totalCost += (this->productMap[itr.first].getPrice() * itr.second);
        }
        cout << "Total cost is : " << totalCost << "Rs. Order executed successfully" << endl;
    }
};

class User
{
    string name;
    InventorySystem system;

public:
    User(string name)
    {
        this->name = name;
    }

    void addProduct(Product product)
    {
        this->system.addProduct(product);
    }

    Product deleteProduct(Product product)
    {
        this->system.removeProduct(product);
    }

    void displayProducts()
    {
        this->system.displayProducts();
    }

    void executeOrder()
    {
        this->system.executeOrder();
    }
};

int main()
{
    User user("Nayan Singhal");
    SIZE s1 = S;
    Product product1("1", 23.00, "Sausages", s1);
    user.addProduct(product1);
    SIZE s2 = M;
    Product product2("2", 45.00, "Bulb", s2);
    user.addProduct(product2);
    user.addProduct(product2);
    // user.displayProducts();
    user.executeOrder();
    return 0;
}