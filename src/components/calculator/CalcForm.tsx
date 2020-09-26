import React from 'react'
import {connect} from 'react-redux'
import CalcItem from './CalcItem'
import { IDish } from "../../interfaces/dishes";
  
interface IState {
    dishes: IDish[]
    dayLimit: number
    calc: Function
}

const LargeForm:React.FC<IState> = ({dishes, calc, dayLimit}) => (
    <div className="col s12">
        <ul className="collection">
            {dishes.map((item, i) => {
                return (item.calculated) ? (<CalcItem {...item} key={i}/>) : ''
            })}
        </ul>
        <div className="row margin0 total p2">
            <span className="to-left">Your day limit: <strong className="f20">{dayLimit}</strong></span>
            <span className="to-right">In total: <strong className="f20">{calc()}</strong> calories.</span>
        </div>
        <div id="informer"></div>
    </div>
)

const mapStateToProps = ({dishes = [], dayLimit = 0}) => ({
    dishes,
    dayLimit,
    calc: function(){
        let summ = 0
        dishes.map((item:any) => (item.calculated) ? summ = summ + item.calories: '')
        return summ
    }
})

export default connect(mapStateToProps)(LargeForm)