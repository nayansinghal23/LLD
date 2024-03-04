#include <bits/stdc++.h>
using namespace std;

class Piece
{
    string color;
    string name;

public:
    void setColor(string color)
    {
        this->color = color;
    }

    void setName(string name)
    {
        this->name = name;
    }

    string getColor()
    {
        return this->color;
    }

    string getName()
    {
        return this->name;
    }
};

class Cell
{
public:
    Piece p;
    int x;
    int y;
    Cell() {}
    Cell(int x, int y, Piece p)
    {
        this->p = p;
        this->y = y;
        this->x = x;
    }
};

class Pawn : public Piece
{
public:
    Pawn(string color, string name)
    {
        this->setColor(color);
        this->setName(name);
    }

    bool isMoveValid(Cell start, Cell end) {}
};

class Player
{
    string name;
    int rating;
    string color;

public:
    Player(string name, int rating, string color)
    {
        this->name = name;
        this->rating = rating;
        this->color = color;
    }

    string getName()
    {
        return this->name;
    }
};

class Board
{
    int size;
    vector<vector<Cell>> board;

public:
    Board(int size)
    {
        this->size = size;
        this->board.resize(size, vector<Cell>(size, Cell()));
    }

    void initialize()
    {
        int size = this->size;
        while (size-- > 0)
        {
            Pawn pawn1("white", "pawn");
            this->board[1][size].x = size;
            this->board[1][size].y = 1;
            this->board[1][size].p = pawn1;
            Pawn pawn2("black", "pawn");
            this->board[6][size].x = size;
            this->board[6][size].y = 6;
            this->board[6][size].p = pawn2;
        }
        this->printBoard();
    }

    void printBoard()
    {
        for (int i = 0; i < this->size; i++)
        {
            for (int j = 0; j < this->size; j++)
            {
                if (this->board[i][j].p.getColor() == "")
                {
                    cout << "YES ";
                }
                else
                {
                    cout << this->board[i][j].p.getColor() << "_" << this->board[i][j].p.getName() << " ";
                }
            }
            cout << endl;
        }
    }
};

int main()
{
    int size = 8;
    Board board(size);
    board.initialize();
    return 0;
}