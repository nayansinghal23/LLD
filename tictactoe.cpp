#include <bits/stdc++.h>
using namespace std;

class PlayingPiece
{
public:
    string pieceType;
    PlayingPiece() {}
    PlayingPiece(string pieceType)
    {
        this->pieceType = pieceType;
    }
};

class PlayingPieceX : public PlayingPiece
{
public:
    PlayingPieceX() : PlayingPiece("X") {}
};

class PlayingPieceO : public PlayingPiece
{
public:
    PlayingPieceO() : PlayingPiece("O") {}
};

class Board
{
public:
    int size;
    vector<vector<PlayingPiece>> board;

    Board(int size)
    {
        this->size = size;
        this->board.resize(size, vector<PlayingPiece>(size, PlayingPiece("")));
    }

    bool addPiece(int row, int column, PlayingPiece playingPiece)
    {
        if (row < 0 || column < 0 || row >= this->size || column >= this->size)
        {
            cout << "Out of bound error" << endl;
            return false;
        }
        if (this->board[row][column].pieceType != "")
        {
            cout << "Select different position" << endl;
            return false;
        }
        this->board[row][column] = playingPiece;
        return true;
    }

    vector<pair<int, int>> getFreeCells()
    {
        vector<pair<int, int>> freeCells;
        for (int i = 0; i < this->size; i++)
        {
            for (int j = 0; j < this->size; j++)
            {
                if (this->board[i][j].pieceType == "")
                {
                    pair<int, int> p;
                    p.first = i;
                    p.second = j;
                    freeCells.push_back(p);
                }
            }
        }
        return freeCells;
    }

    void printBoard()
    {
        for (int i = 0; i < this->board.size(); i++)
        {
            for (int j = 0; j < this->board[0].size(); j++)
            {
                if (this->board[i][j].pieceType == "")
                {
                    cout << "    ";
                }
                else
                {
                    cout << this->board[i][j].pieceType << "   ";
                }
                cout << " | ";
            }
            cout << endl;
        }
    }
};

class Player
{
public:
    string name;
    PlayingPiece playingPiece;

    Player(string name, PlayingPiece playingPiece)
    {
        this->name = name;
        this->playingPiece = playingPiece;
    }

    string getName()
    {
        return this->name;
    }

    PlayingPiece getPlayingPiece()
    {
        return this->playingPiece;
    }

    void setName(string name)
    {
        this->name = name;
    }

    void setPlayingPiece(PlayingPiece playingPiece)
    {
        this->playingPiece = playingPiece;
    }
};

class TicTacToe
{
public:
    deque<Player> players;
    Board *board;
    TicTacToe(int size)
    {
        PlayingPieceX cross;
        Player player1("PLAYER_1", cross);
        PlayingPieceO zero;
        Player player2("PLAYER_2", zero);
        this->players.push_back(player1);
        this->players.push_back(player2);
        this->board = new Board(size);
    }

    string startGame()
    {
        bool noWinner = true;
        while (noWinner)
        {
            Player playerTurn = this->players.front();
            this->players.pop_front();
            this->board->printBoard();
            vector<pair<int, int>> freeCells = this->board->getFreeCells();
            if (freeCells.size() == 0)
            {
                noWinner = false;
                continue;
            }
            cout << "Player : " << playerTurn.getName() << ". Enter row, column : ";
            int row, column;
            cin >> row >> column;
            bool pieceAddedSuccessfully = this->board->addPiece(row, column, playerTurn.getPlayingPiece());
            if (!pieceAddedSuccessfully)
            {
                cout << "Try again!!!" << endl;
                this->players.push_front(playerTurn);
                continue;
            }
            this->players.push_back(playerTurn);
            bool winner = isThereWinner(row, column, playerTurn.getPlayingPiece().pieceType);
            if (winner)
            {
                return playerTurn.getName();
            }
        }
        return "DRAW";
    }

    bool isThereWinner(int row, int column, string pieceType)
    {
        bool rowMatch = true, columnMatch = true, diagonalMatch = true, antiDiagonalMatch = true;
        for (int i = 0; i < this->board->board.size(); i++)
        {
            if (this->board->board[row][i].pieceType == "" || this->board->board[row][i].pieceType != pieceType)
            {
                rowMatch = false;
            }
        }
        for (int i = 0; i < this->board->board.size(); i++)
        {
            if (this->board->board[i][column].pieceType == "" || this->board->board[i][column].pieceType != pieceType)
            {
                columnMatch = false;
            }
        }
        int i = 0, j = 0;
        while (i < this->board->board.size())
        {
            if (this->board->board[i][j].pieceType == "" || this->board->board[i][j].pieceType != pieceType)
            {
                diagonalMatch = false;
            }
            i++;
            j++;
        }
        i = 0, j = this->board->board.size() - 1;
        while (i < this->board->board.size())
        {
            if (this->board->board[i][j].pieceType == "" || this->board->board[i][j].pieceType != pieceType)
            {
                antiDiagonalMatch = false;
            }
            i++, j--;
        }
        return rowMatch || columnMatch || diagonalMatch || antiDiagonalMatch;
    }
};

int main()
{
    TicTacToe *game = new TicTacToe(3);
    string winner = game->startGame();
    cout << "The result is : " << winner << endl;
    return 0;
}