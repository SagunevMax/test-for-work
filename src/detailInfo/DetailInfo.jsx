const DetailInfo = ({ information }) => {
  const streetAddress =
    information && information.address
      ? information.address.streetAddress
      : null;
  const city =
    information && information.address ? information.address.city : null;
  const state =
    information && information.address ? information.address.state : null;
  const zip =
    information && information.address ? information.address.zip : null;

  return (
    <div>
      <div>
        id: <b>{information.id}</b>
      </div>
      <div>
        firstName:<b> {information.firstName}</b>
      </div>
      <div>
        lastName:
        <b>{information.lastName} </b>
      </div>
      <div>
        email: <b>{information.email}</b>
      </div>
      <div>
        phone:
        <b>{information.phone}</b>
      </div>
      <div>address:</div>
      <div>
        streetAddress:
        <b>{streetAddress}</b>
      </div>
      <div>
        city:
        <b>{city}</b>
      </div>
      <div>
        state:
        <b>{state}</b>
      </div>
      <div>
        zip:
        <b>{zip}</b>
      </div>
      <div>
        description:
        <b>{information.description}</b>
      </div>
    </div>
  );
};

export default DetailInfo;

// id: information.id,
// firstName: information.firstName,
// lastName: information.lastName,
// email: 'DWhalley@in.gov',
// phone: '(612)211-6296',
// address: {
//   streetAddress: '9792 Mattis Ct',
//   city: 'Waukesha',
//   state: 'WI',
//   zip: '22178'
// },
// description: 'et lacus magna dolor...',
