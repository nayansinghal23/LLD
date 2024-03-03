#include <bits/stdc++.h>
using namespace std;

class A
{
    int value;

public:
    int setValue(int value)
    {
        this->value = value;
    }

    void sayHello()
    {
        cout << "Hello Nayan Singhal" << endl;
    }

    /*
        int sayHello()
        {
            cout << "Hiii" << endl;
            return 2;
        }

        Overloading can't be achieved by changing just the return type. To achieve function overloading, we need to change the parameters.
    */
    void sayHello(string name)
    {
        cout << "Hello " << name << endl;
    }

    // add is also function overloading, because it can be called by 2(x & y), 3(x & y & z) and 4(x & y & z & w) params
    int add(int x, int y, int z = 0, int w = 0)
    {
        return x + y + z + w;
    }

    void operator+(A &obj)
    {
        int value1 = this->value;
        int value2 = obj.value;
        cout << "output " << value1 - value2 << endl;
    }

    void operator-(A &obj)
    {
        int value1 = this->value;
        int value2 = obj.value;
        cout << "output " << value1 * value2 << endl;
    }
};

class Animal
{
public:
    void speak()
    {
        cout << "Speaking" << endl;
    }
};

class Dog : public Animal
{
public:
    void speak()
    {
        cout << "Barking" << endl;
    }
};

int main()
{
    A obj;
    obj.sayHello("Lagan");
    obj.sayHello();
    A obj1, obj2;
    obj1.setValue(3);
    obj2.setValue(7);
    obj1 - obj2;

    Dog dog;
    dog.speak();
    return 0;
}

// Compile(Static) Time Polymorphism :- Function overloading & Operator overloading
// Run(Dynamic) Time Polymorphism :- Method overriding