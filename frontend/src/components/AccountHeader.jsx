import { useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { FormContainer } from "../components";
import { updateProfile } from "../features/userProfile/userProfileSlice";

export { AccountHeader }

function AccountHeader() {
  const [open, setOpen] = useState('')
  const [userName, setUsername] = useState('')

  const dispatch = useDispatch()

  const { firstName, lastName } = useSelector((state) => state.user)
  
  const ToggleEdit = () => {
    setOpen(!open);
  };
  
  const onSubmit = (e) => {
    e.preventDefault()

    dispatch(updateProfile({ userName }))
    setUsername('')
    ToggleEdit(false)
  }

  return (
    <>
      { !open ? (
          <div className="header">
            <h1>Welcome back<br />{firstName} {lastName} !</h1>
            <button className="edit-button button" onClick={ToggleEdit}>
              Edit Name
            </button>
          </div>
        )
        :
        (
          <FormContainer>
            <h1>Edit user info</h1>

            <form onSubmit={onSubmit}>
              <div className="input-wrapper">
                <label htmlFor="userName">User name:</label>
                <input 
                  type="text" 
                  id="userName"
                  name="userName"
                  value={userName}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="input-wrapper">
                <label htmlFor="firstName">First name:</label>
                <input 
                  type="text" 
                  id="firstName"
                  name="firstName"
                  placeholder={firstName}
                  disabled
                />
              </div>
              <div className="input-wrapper">
                <label htmlFor="lastName">Last name:</label>
                <input 
                  type="text" 
                  id="lastName" 
                  name="lastName"
                  placeholder={lastName}
                  disabled
                />
              </div>
              <div className="edit-button__wrapper">
                <button className="edit-button__wrapper--save button">Save</button>
                <div onClick={ToggleEdit} className="edit-button__wrapper--cancel button">Cancel</div>
              </div>
            </form>

          </FormContainer>
        )
      }
    </>
  );
}
  

	/*
				{/* <Link to='/profile' className="edit-button">
					<button className="edit-button">Edit Name</button>
				</Link> *//*}
				<Link className="edit-button" onClick={() => {setOpen(!open)}}{...open}>
          Edit user info
        </Link>
			</div>



			<section className={open ? 'sign-in-content display' : ' sign-in-content hide'}>
        <h1>
          Edit user info
          <br />
        </h1>
        <form onSubmit={onSubmit}>
          <div className="updateuser-wrapper">
            <label htmlFor="userName">User name:</label>
            <input
              type="text"
              id="userName"
              name="userName"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Enter your userName"
              required
            />
          </div>
          <div className="updateuser-wrapper">
            <label htmlFor="firstName">First name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              disabled="disabled"
            />
          </div>
          <div className="updateuser-wrapper">
            <label htmlFor="lastName">Last name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={lastName}
              disabled="disabled"
            />
          </div>
          <div className="edit-buttons">
            <button className="sign-in-button">
              Save
            </button>
            <Link className="sign-in-button" onClick={() => {setOpen(!open)}}>
              Cancel
            </Link>
          </div>
        </form>
      </section>
		</>
	) */
