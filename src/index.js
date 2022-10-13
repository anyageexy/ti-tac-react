import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class Square extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         value: null,
    //     };
    // }

    render() {
        return (
            <button
                className="square"
                // onClick={() => { this.setState({ value: "X" }) }}
                onClick={() => { this.props.onClick() }}
            //устанавливаем знаечние и ниже присваиваем его кнопке
            >
                {this.props.value}
            </button>
        );
    }
}

class Board extends React.Component {
    //создаем конструктор, чтобы сделать подбем состояния детей (Square) родителю
    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),//изначально все квадратики типа нулёвые
        };
    } 

    handleClick(i){
        const squares = this.state.squares.slice();
        squares[i] ="X";
        this.setState({squares: squares});
    }


    renderSquare(i) {
        // return <Square value={i} />;
        //прописываем value, чтобы потом отдать пропсы компоненту square
        //т.е. передаем проп от родителя к ребенку


        // теперь делаем такой вариант, чтобы мы передавати каждому ребенку
        //его состояние
        return <Square
            value={this.state.squares[i]}

            //а теперь будем вызывать функцию, когдла будет клик по элементу
            onClick={() => this.handleClick(i)}

        />
    }

    render() {
        const status = 'Next player: X';

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);
