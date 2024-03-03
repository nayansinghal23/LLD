#include <bits/stdc++.h>
using namespace std;

class A
{
public:
    void func()
    {
        cout << "I am A" << endl;
    }
};

class B
{
public:
    void func()
    {
        cout << "I am B" << endl;
    }
};

class C : public A, public B
{
};

int main()
{
    C obj;
    obj.A::func();
    obj.B::func();
    return 0;
}

/*
    inhertited-type :- class Male : public Human        class Male : private Human       class Male : protected Human
    public              public                          protected                        not-accessible
    private             private                         not-accessible                   not-accessible
    protected           protected                       protected                        not-accessible
*/

// Single Inheritence => Animal -> Dog
// Multilevel Inheritence => Animal -> Dog -> Germen_Shepherd
// Multiple Inheritence => A -> C <- B, one class inherited by multiple classes
// Hybrid Inheritence => Combination of more than one type of inheritence

// Inheritence Ambiguity => When 2 same named functions are present in 2 different class that inherit same child class (A -> C <- B) then object of C doesn't know what function to call. This is called inheritence ambiguity. Scope Resolution operator(::) is the solution for this.