import React, {useState} from 'react';


const BoxGenerator = (props) => {
    const {boxGenList, setBoxGenList} = props

    const [boxGen, setBoxGen] = useState({
        color:'',
        height:0,
        width:0
    })

    const onChangeHandler = (e) => {
        setBoxGen(prevState => ({...prevState, [e.target.name]: e.target.value}))
    }
    
    const createBoxGenerator = (e) => {
        console.log("Color is", boxGen.color)
        console.log("Height is", boxGen.width)
        console.log("Width is", boxGen.height)
        e.preventDefault();
        let id = crypto.randomUUID()
        let newBoxGen = {...boxGen, id:id}
        setBoxGenList([...boxGenList, newBoxGen])
        setBoxGen({
            color: '',
            height: 0,
            width: 0,
        });
    }

    return (
        <div>
            <form onSubmit={createBoxGenerator} className='w-50 my-1 mx-auto'>
                <label className='form-label my-1'>Color: </label>
                <input className='form-control my-1' name='color' onChange={ onChangeHandler } value={ boxGen.color } type="text" />

                <label className='form-label my-1'>Height: </label>
                <input className='form-control my-1' name='height' onChange={ onChangeHandler } value={ boxGen.height } type="number" />

                <label className='form-label my-1'>Width: </label>
                <input className='form-control my-1' name='width' onChange={ onChangeHandler } value={ boxGen.width } type="number" />

                <button className='btn btn-primary my-1'>Add</button>
            </form>
        </div>
    );
};

export default BoxGenerator;


