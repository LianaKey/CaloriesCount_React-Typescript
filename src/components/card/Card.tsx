/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {connect} from 'react-redux'
import {toggleItem} from '../../redux/actions'
import {IDish} from '../../interfaces/dishes'

let val:string = 'add';
let color:string = 'blue';

const Card = (props:IDish & { addCalc: Function }) => {

    if (props.calculated) {
        val = 'remove';
        color = 'red';
    } else {
        val = 'add';
        color = 'blue';
    }

    let defaultClass:string = 'btn-floating halfway-fab waves-effect waves-light';
    let classList:string = defaultClass.concat(' ', color);

    return (
        <div className="card col2">
            <div className="card-image">
                <img src={ require(`../../assets/img/${props.photo}`) } alt={props.title} />
                <span className="card-title">{props.title}</span>
                <a className={classList} onClick={()=>{ props.addCalc(props.id) }}>
                <i className="material-icons">{val}</i>
                </a>
            </div>
            <div className="card-content">
                <span className="calories"><strong>{props.calories} kcal</strong></span>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch:any) => ({
    addCalc(id:number) {
        return (
            dispatch(toggleItem(id))
        )
    }
})

export default connect(null, mapDispatchToProps)(Card)
// export default Card