import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';

function avarage(data) {
  return _.round(_.sum(data)/data.length);
};

export default (props) => {
  return (
    <div>
      <Sparklines height={130} width={180} data={props.data}>
        {/* style "prop" isn't really one; it's an attribute from Sparklines */}
        <SparklinesLine style={{strokeWidth: 3}} color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>
        {avarage(props.data)} {props.units}
      </div>
    </div>
  );
}
