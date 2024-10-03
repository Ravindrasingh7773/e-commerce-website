import React, { Fragment } from 'react'
import Button from '../button'
import styles from "./style.module.css"

const SectionHeader = ({title,Btntext="VIEW ALL",isButtons = false}) => {
  return (
    <Fragment>
        
        <div className={styles.section_header}>
            <h5>
            {title}
            </h5>
            { isButtons ?    
              <div className={styles.buttons}>
              <Button text={"Featured"} type={"outline"} size={"small"}  />
              <Button text={"Pregnancy & Postpartum"} type={"outline"} size={"small"}   />
              <Button text={"Milks $ Foods"} type={"outline"}  size={"small"}  />
              <Button text={"Diapers & Wipes"} type={"outline"}  size={"small"}  />
              <Button text={"Infant"} type={"outline"}  size={"small"}  />
              <Button text={"Strollers"} type={"outline"}  size={"small"}   />
              </div>
              :
              <Button text={Btntext} type={"text"} showArrow={true} />
            }
        </div>
    </Fragment>
  )
}

export default SectionHeader