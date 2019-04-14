import React, {Component} from 'react'
import styled from 'styled-components'

import Toggleable from './../_utils/toggleable'

// TODO:
// - toggle
// - when submitted, first update nodes[], then use nodes[] to search and update
// - changes to logic
// - delete nodes

const SelectedPizza = styled.div`
    position: absolute;
    top: 3.5em;
    width: 300px;
    height: 300px;
    background-color: red;
`

const SelectedBtn = styled.button`
    padding: 0, 1em, 0, 1em;
    border: none;
    background: none;
    color: #696969;
    font-family: 'IBM Plex Mono'
`

const ListTitle = styled.p`
    font-size: 1.2em;
    margin: 0;
    font-weight: bold;
`

const StripPizza = styled.div`
    display:flex;
`

const StripDiv = styled.div`
    width: 10em;
`

const DeleteBtn = styled.div`
    margin-left:1em;
    margin-right:1em;
`

//////////////////////////////////////////////////////

const SelectedNodesStrip = props => 
    <StripPizza>
        <StripDiv>{props.el}</StripDiv>
        <DeleteBtn onClick={() => props.deleteFunc(props.el)}>DELETE</DeleteBtn>
    </StripPizza>

const SelectedNodesContainer= props => {

    let data = props.data
    let temp = []

    console.log('carrot')
    console.log(props.data)

    if(!data.departs.length && !data.entities.length) {
        temp.push(<div>Nothing to see here.</div>)
    } else {

        if(data.departs.length) {
            let tempArr = [<ListTitle>HELLO DEPARTS</ListTitle>]
            // data.departs.map(el => tempArr.push(<div>{el}</div>))
            data.departs.map(el => tempArr.push(
                <SelectedNodesStrip 
                    el={el}
                    deleteFunc={props.deleteDepart}
                />
            ))
            temp.push(...tempArr)
        }

        if(data.entities.length) {
            let tempArr = [<ListTitle>HELLO ENTITIES</ListTitle>]
            // data.entities.map(el => tempArr.push(<div>{el}</div>))
            data.entities.map(el => tempArr.push(
                <SelectedNodesStrip 
                    el={el}
                    deleteFunc={props.deleteEntity}
                />
            ))

            temp.push(...tempArr)
        }

       
        // temp.push(...tempDeparts)
    }



    // props.data.map(data => {
    //     temp.concat(data)
    // })

    return(
        <SelectedPizza>
            {/* <div>Selected</div> */}
            {temp}
        </SelectedPizza>
    )
}

const Toggleable_SelectedNodes = props => 
    <Toggleable>
        {(expand, onClick) => (
            <div>
                <SelectedBtn onClick={onClick}>SELECTED</SelectedBtn>
                {/* <SelectedNodesDisplay /> */}
                { expand && 
                    <SelectedNodesContainer 
                        // nodes={}
                        data={props.data}
                        deleteEntity={props.deleteEntity}
                        deleteDepart={props.deleteDepart}
                    />
                }
            </div>
        )}
    </Toggleable>

const SelectedNodes = props => 
    <Toggleable_SelectedNodes 
        data={props.data} 
        deleteEntity={props.deleteEntity}
        deleteDepart={props.deleteDepart}
    />

export default SelectedNodes;