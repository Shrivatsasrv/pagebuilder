import React from 'react'
import { Button, Card, Container, Form } from 'react-bootstrap'

const Body = ({
    logoPosition,
    setlogoPosition,
    color, setColor,
    showheader, setShowheader,
    showfooter, setShowfooter,
    leftdrawer, setleftdrawer,
    rightdrawer, setrightdrawer,
    showtabs, setshowtabs,
    bottomMenu, setBottomMenu,
}) => {
    console.log(setBottomMenu);

    const changeColor = () => {
        const tags = document.getElementsByClassName('form-check-input');
        console.log(tags);
    }

    return (
        <Container>
            <Card className="p-5 my-3" style={{ width: "35rem", margin: "auto" }}>
                <Form>
                    <p>I want the Campany Logo</p>
                    <Form.Check inline name="logoposition" defaultChecked={true} type="radio" id="inline-radio-1" label="Left" onClick={() => { setlogoPosition("start") }} />
                    <Form.Check inline name="logoposition" type="radio" id="inline-radio-2" label="Right" onClick={() => { setlogoPosition("end") }} />
                    <Form.Check inline name="logoposition" type="radio" id="inline-radio-3" label="Center" onClick={() => { setlogoPosition("center") }} />
                    <Form.Check inline name="logoposition" type="radio" id="inline-radio-4" label="Disabled" onClick={() => { setlogoPosition("false") }} />

                    <br /><br />
                    <p>Preset Color</p>
                    <Form.Check inline name="color" defaultChecked={true} type="radio" label="Blue (#1976d2)" onChange={() => { setColor("#1976d2") }} />
                    <Form.Check inline name="color" type="radio" label="Red (#ff0000) " onChange={() => { changeColor(); setColor("#ff0000") }} />

                    <br />
                    Preset Apply only : Header Background Button, Radio Button & Switch
                    <hr />

                    <div className="form-check form-switch mb-2">
                        <input className="form-check-input" defaultChecked={true} type="checkbox" id="checkheader" onChange={() => { setShowheader(!showheader) }} />
                        <label className="form-check-label" htmlFor="checkheader">I want a Header</label>
                    </div>
                    <div className="form-check form-switch mb-2">
                        <input className="form-check-input" defaultChecked={true} type="checkbox" id="checkfooter" onChange={() => { setShowfooter(!showfooter) }} />
                        <label className="form-check-label" htmlFor="checkfooter">I want a Footer</label>
                    </div>
                    <div className="form-check form-switch mb-2">
                        <input className="form-check-input" type="checkbox" defaultChecked={true} id="overLaydrawer" onChange={() => { setleftdrawer(!leftdrawer); setrightdrawer(!rightdrawer) }} />
                        <label className="form-check-label" htmlFor="overLaydrawer">I want a Drawer OverLay Mode (requires Header or Footer)</label>
                    </div>
                    <div className="form-check form-switch mb-2">
                        <input className="form-check-input" defaultChecked={true} type="checkbox" id="leftdrawer" onChange={() => { setleftdrawer(!leftdrawer) }} />
                        <label className="form-check-label" htmlFor="leftdrawer">I want a left-side Drawer</label>
                    </div>
                    <div className="form-check form-switch mb-2">
                        <input className="form-check-input" defaultChecked={true} type="checkbox" id="rightdrawer" onChange={() => { setrightdrawer(!rightdrawer) }} />
                        <label className="form-check-label" htmlFor="rightdrawer">I want a right-side Drawer</label>
                    </div>
                    <div className="form-check form-switch mb-2">
                        <input className="form-check-input" defaultChecked={true} type="checkbox" id="checktab" onChange={() => { setshowtabs(!showtabs) }} />
                        <label className="form-check-label" htmlFor="checktab">I want a navigation tabs(requires Header)</label>
                    </div>
                    <div className="form-check form-switch mb-2">
                        <input className="form-check-input" defaultChecked={true} type="checkbox" id="menucheck"
                            onChange={() => { setBottomMenu(!bottomMenu) }} />
                        <label className="form-check-label" htmlFor="menucheck">I want a Bottom Menu(requires Footer)</label>
                    </div>

                    <hr />

                    <div>
                        <Button style={{ background: `${color}` }}>CONTINUE</Button>
                    </div>
                </Form>
            </Card>
        </Container>

    )
}

export default Body