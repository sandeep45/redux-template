import React, { PropTypes, Component } from 'react'

import {Link, withRouter} from 'react-router';
import NavLink from '../generic/NavLink';

const TabLi = withRouter((props) => {
  const {url, txt, router} = props;
  return (
    <li role="presentation" className={router.isActive(url, true) ? "active" : ""}>
      <NavLink to={url}>{txt}</NavLink>
    </li>
  );
});

class TabNav extends Component{

  constructor(props){
    super(props)
  }

  render(){

    console.log('router: ', this.context.router);
    console.log('router /tab_nav/paginated_phone_numbers active ?',
    this.context.router.isActive("/tab_nav/paginated_phone_numbers", true));


    return(
      <div>
        <div className="page-header">
          <h1>Tab Nav Example</h1>
        </div>
        <ul className="nav nav-tabs">
          <TabLi url="/tab_nav" txt="Home" />
          <TabLi url="/tab_nav/paginated_phone_numbers" txt="PhoneBook" />
          <TabLi url="/tab_nav/my_chart" txt="MyChart" />
        </ul>
        <div style={{marginTop: "20px"}}>
          {this.props.children}
        </div>
      </div>

    )
  };

  // _buildLi = (url, txt) => {
  //   const isActive = this.context.router.isActive;
  //   return (
  //     <li role="presentation" className={isActive(url, true) ? "active" : ""}>
  //       <NavLink to={url}>{txt}</NavLink>
  //     </li>
  //   );
  // }

}

export default TabNav

TabNav.contextTypes= {
  router: React.PropTypes.object
}



