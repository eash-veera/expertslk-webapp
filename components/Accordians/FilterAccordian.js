import React from "react";
import AccordianItem from "components/Accordians/AccordianItem.js";

export default function FilterAccordian() {
    // const [showModal, setShowModal] = React.useState(false);
    const paragraph = 'No data'

    const data = [
        {
          title: 'Pricing plans',
          paragraph
        },
        {
          title: 'How to apply',
          paragraph
        },
        {
          title: 'Purchasing process',
          paragraph
        },
        {
          title: 'Usage guides',
          paragraph
        }
    ];

    return (
      <div {...{ className: 'wrapper' }}>
        <ul {...{ className: 'accordion-list' }}>
          {data.map((data, key) => {
            return (
              <li {...{ className: 'accordion-list__item', key }}>
                <AccordianItem {...data} />
              </li>
            )
          })}
        </ul>
      </div>
    );
  }