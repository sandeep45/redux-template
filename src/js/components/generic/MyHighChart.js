import React, { PropTypes, Component } from 'react'
import _ from 'lodash'

import Highcharts from 'highcharts'

class MyHighChart extends Component{

  constructor(props){
    super(props)
  };

  static propTypes = {
    options: PropTypes.object.isRequired,
    modules: PropTypes.string,
  }

  componentDidMount(){
    console.log("mounting, so building chart");

    const {options, modules} = this.props;

    // http://www.highcharts.com/docs/getting-started/install-from-npm
    if (modules) {
      modules.forEach(module =>  module(Highcharts));
    }

    // Highchart mutates `options` by adding _colorIndex to series when no color is specified.
    // http://forum.highcharts.com/highcharts-usage/reset-color-index-when-removing-auto-colored-series-t5653/
    this._chartObj = new Highcharts.Chart(this._myChart, _.cloneDeep(options));
  };

  componentWillUnmount() {
    console.log("UNmounting, so destroying chart");

    this._chartObj.destroy();
  };

  componentWillReceiveProps(nextProps){
    console.log("componentWillReceiveProps", nextProps);

    const oldOptions = this.props.options;
    const newOptions = nextProps.options;

    if(_.isEqual(oldOptions,newOptions)){
      console.log("skipping updating of charts as options are equal, meaning nothing has updated");
    }else{
      console.log("UPdating Charts as options have updated", oldOptions, newOptions);
      this._chartObj = new Highcharts.Chart(this._myChart, _.cloneDeep(nextProps.options));
    }
  };

  componentWillUpdate(nextProps){
    console.log("componentWillUpdate: ", nextProps);
  };

  componentDidUpdate(nextProps){
    console.log("componentDidUpdate: ", nextProps);
  };

  shouldComponentUpdate(nextProps){
    console.log("shouldComponentUpdate: ", nextProps);
    return true;
  }

  render(){
    const {options, modules, ...others} = this.props;
    return(
      <div>
        <div style={{width:"100%", height:"400px"}}
          ref={c => this._myChart = c}
          {...others}
        >
        </div>
      </div>
    )
  };

}

export default MyHighChart

