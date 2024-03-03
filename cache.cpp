#include <bits/stdc++.h>
using namespace std;

class DLL
{
public:
    string data;
    DLL *prev;
    DLL *next;

    DLL() {}
    DLL(string data)
    {
        this->data = data;
        this->prev = NULL;
        this->next = NULL;
    }
};

class EvictionPolicy
{
    DLL *dummy;
    map<string, DLL> mp;

public:
    void initializeList()
    {
        DLL *dummy = new DLL("DUMMY");
        this->dummy = dummy;
    }

    void add(string key)
    {
        this->addAtLast(key);
        this->printCache();
    }

    void get(string key)
    {
        this->updateCache(key);
        this->printCache();
    }

    string removeFirst()
    {
        DLL *curr = this->dummy;
        DLL *toDelete = curr->next;
        curr->next = curr->next->next;
        toDelete->next = NULL;
        toDelete->prev = NULL;
        if (curr->next != NULL)
        {
            curr->next->prev = curr;
        }
        string deletedValue = toDelete->data;
        delete toDelete;
        return deletedValue;
    }

    void updateCache(string key)
    {
        DLL *curr = this->dummy;
        DLL *toChange = NULL;
        while (curr != NULL)
        {
            if (curr->next->data == key)
            {
                toChange = curr->next;
                curr->next = curr->next->next;
                toChange->next = NULL;
                toChange->prev = NULL;
                if (curr->next != NULL)
                {
                    curr->next->prev = curr;
                }
                break;
            }
            curr = curr->next;
        }
        curr = this->dummy;
        while (curr->next != NULL)
        {
            curr = curr->next;
        }
        curr->next = toChange;
        toChange->prev = curr;
    }

    void addAtLast(string key)
    {
        DLL *newNode = new DLL(key);
        DLL *curr = this->dummy;
        while (curr->next != NULL)
        {
            curr = curr->next;
        }
        curr->next = newNode;
        newNode->prev = curr;
    }

    void printCache()
    {
        DLL *head = this->dummy->next;
        cout << "Cache has : ";
        while (head != NULL)
        {
            cout << head->data << "-><-";
            head = head->next;
        }
        cout << "NULL" << endl;
    }
};

class Storage
{
    map<string, string> mp;
    int capacity;

public:
    Storage() {}
    Storage(int capacity)
    {
        this->capacity = capacity;
    }

    bool add(string key, string value)
    {
        if (this->mp.size() == this->capacity)
        {
            return false;
        }
        this->mp[key] = value;
        return true;
    }

    void remove(string key)
    {
        if (this->mp.size() == 0 || this->mp[key] == "")
        {
            cout << "Nothing to delete" << endl;
            return;
        }
        this->mp.erase(key);
    }

    string get(string key)
    {
        return this->mp.find(key) != this->mp.end() ? this->mp[key] : "Item not found!";
    }

    int getCacheSize()
    {
        return this->mp.size();
    }

    void printStorage()
    {
        for (auto itr : this->mp)
        {
            cout << itr.first << " " << itr.second << " ";
        }
    }
};

class Cache
{
    EvictionPolicy evictionPolicy;
    Storage storage;

public:
    Cache(EvictionPolicy evictionPolicy, Storage storage)
    {
        this->evictionPolicy = evictionPolicy;
        this->storage = storage;
    }

    void put(string key, string value)
    {
        bool isChacheAdded = this->storage.add(key, value);
        if (!isChacheAdded)
        {
            string toRemove = this->evictionPolicy.removeFirst();
            this->storage.remove(toRemove);
            this->storage.add(key, value);
        }
        this->evictionPolicy.add(key);
        cout << "Item added successfully. Cache size is : " << this->storage.getCacheSize() << endl;
    }

    string get(string key)
    {
        string output = this->storage.get(key);
        if (output != "Item not found!")
        {
            this->evictionPolicy.get(key);
        }
        return output;
    }
};

int main()
{
    // Implementing LRU
    int capacity = 4;
    EvictionPolicy evictionPolicy;
    evictionPolicy.initializeList();
    Storage storage(capacity);
    Cache cache(evictionPolicy, storage);
    cache.put("Nayan", "Singhal");
    cache.put("Lagan", "Singh");
    cache.put("Naman", "Tejaswi");
    cache.put("Virat", "Kohli");
    cout << cache.get("Lagan") << endl;
    cout << cache.get("Naman") << endl;
    cout << cache.get("Naman") << endl;
    cout << cache.get("Nayan") << endl;
    cout << cache.get("Virat") << endl;
    cache.put("Rohit", "Sharma");
    cache.put("KL", "Rahul");
    return 0;
}

/*
Cahce Type  FIFO  LIFO  LRU   LFU
Search   -  O(1)  O(1)  O(1)  O(1)
Set      -  O(1)  O(1)  O(N)  O(N)
Eviction -  O(1)  O(1)  O(N)  O(N)

We will implement by taking Doubly Linked List and a map.

LIFO -> Will add the incoming item at the start of DLL and increase the size iterator. If the size == n && we have write() operation, we will remove the head element and insert the new item to head and update map.

FIFO -> Will add the incoming item at the end of DLL and increase the size iterator. If the size == n && we have write() operation, we will remove the head element and insert the new item to end and update map.
*/