import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import n2000 from './img/2000.jpg'
import n500 from './img/500.jpg'
import n200 from './img/200.jpg'
import n100 from './img/100.jpeg'
import n50 from './img/50.jpg'
import n20 from './img/20.jpg'
import n10 from './img/10.jpg'
import n5 from './img/5.jpg'
import n1 from './img/1.jpg'

// var parse = require('html-react-parser');



function InputAmout(props) {
    console.log('props obj:', props);
    return (
        <div className="m-6">
            <input type="number" className=" border text-sm rounded-lg  block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Enter The Amount"
                onChange={(e) => props.print(e.target.value)}
            />
        </div>
    );
}

function NotesTableRow(props) {
    return (
        <td className={"py-4 px-6 " + (props.value == 0 ? '' : 'text-red-900 font-black	')} id={props.id}>
            {props.value}
        </td>
    )
}

function NotesTable(props) {

    const tbody = []

    for (let i = 0; i < 9; i++) {
        tbody.push(
            <NotesTableRow value={props.value[i]} id={i} />
        )
    }


    return (

        <div className="overflow-x-auto relative mx-6 mb-4">
            <table className="w-full text-sm text-lefttext-gray-400">
                <thead className="text-xs  uppercase bg-gray-700 text-white">
                    <tr>
                        <th scope="col" className="py-3 px-6">
                            2000
                        </th>
                        <th scope="col" className="py-3 px-6">
                            500
                        </th>
                        <th scope="col" className="py-3 px-6">
                            200
                        </th>
                        <th scope="col" className="py-3 px-6">
                            100
                        </th>
                        <th scope="col" className="py-3 px-6">
                            50
                        </th>
                        <th scope="col" className="py-3 px-6">
                            20
                        </th>
                        <th scope="col" className="py-3 px-6">
                            10
                        </th>
                        <th scope="col" className="py-3 px-6">
                            5
                        </th>
                        <th scope="col" className="py-3 px-6">
                            1
                        </th>

                    </tr>
                </thead>
                <tbody className='text-gray-400 text-center'>
                    <tr className=" border-b bg-gray-800 border-gray-700">
                        {tbody}

                    </tr>


                </tbody>
            </table>
        </div>

    )
}




function DisplayCurency(props) {
    console.log('props obj:1 ', props);
    return (
        <div className="mb-5 mx-6  h-[55%] p-3 border  rounded border-white flex flex-row flex-wrap overflow-auto">
            <Display value={props.value} />

        </div>
    );
}

function Display(props) {
    console.log('props obj: 2 ', props);

    let notesImg = [n2000, n500, n200, n100, n50, n20, n10, n5, n1]
    const rows = [];
    for (let i = 0; i < 9; i++) {
        if (props.value[i] != 0) {
            for (let j = 0; j < props.value[i]; j++) {
                rows.push(<FinalDisplay note={notesImg[i]} id={notesImg[i] + '' + j} />)
            }
        }
    }
    // return (

    //     props.value.map((r, i) => {
    //         r == 0 ? '' : 
    //     })


    // )
    return (
        rows
    )

    // props.value.map((v,i)=>{
    //     if (i !== 0) {
    //         return <FinalDisplay />
    //       }
    // })

}

function FinalDisplay(props) {
    return (
        <>
            <div className='p-1' id={props.id}>
                <img src={props.note} className={'h-20'} alt="" />
            </div>

        </>
    )
}


class Game extends React.Component {
    constructor(props) {
        super(props);
        this.notes = [2000, 500, 200, 100, 50, 20, 10, 5, 1];
        this.state = {
            noteCounter: Array(9).fill(0),

        };
    }

    countCurrency(amount) {

        // let amount = event.target.value;
        let nC = Array(9).fill(0);

        // count notes using Greedy approach
        for (let i = 0; i < 9; i++) {
            if (amount >= this.notes[i]) {
                nC[i] = Math.floor(amount / this.notes[i]);
                amount = amount % this.notes[i];
            }
        }

        // Print notes
        console.log("Currency Count ->");
        for (let i = 0; i < 9; i++) {
            if (nC[i] != 0) {
                console.log(this.notes[i] + " : "
                    + nC[i]);
            }
        }
        this.setState({
            noteCounter: nC
        }
        )
    }





    render() {

        return (
            <div className='h-screen overflow-hidden relative'>
                <div className='h-[99%] bg-slate-900 m-[1%] relative'>
                    <div className='flex flex-col h-full'>
                        <div className='mt-3 mx-6 text-center'>

                            <h1 class="text-5xl max-sm:text-sm  font-extrabold text-white "> <span className='bg-blue-400 text-slate-800 px-2 rounded-xl max-sm:block'> Ak Bank  </span> <small class="ml-2 font-semibold text-gray-500 text-gray-400">Minimum No. Of Notes Required For An Amount</small></h1>
                        </div>
                        <div>

                            <InputAmout print={(amt) => this.countCurrency(amt)} />
                        </div>

                        <div>
                            <NotesTable value={this.state.noteCounter} />
                        </div>

                        <div className='h-full'>

                            <DisplayCurency value={this.state.noteCounter} />
                        </div>
                    </div>


                </div>


            </div>

        )

    }
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);