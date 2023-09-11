export const userColumns = [
	{ field: '_id', headerName: 'ID', width: 350 },
	{
		field: 'user',
		headerName: 'User',
		width: 230,
		renderCell: (params) => {
			return (
				<div className="cellWithImg">
					<img
						className="cellImg"
						src={
							params.row.img ||
							'https://th.bing.com/th/id/OIP.0cZFB18FflTpDV0iGoJm3AHaHa?pid=ImgDet&rs=1'
						}
						alt="avatar"
					/>
					{params.row.username}
				</div>
			);
		},
	},
	{
		field: 'email',
		headerName: 'Email',
		width: 230,
	},

	{
		field: 'country',
		headerName: 'Country',
		width: 150,
	},
	{
		field: 'city',
		headerName: 'City',
		width: 130,
	},
	{
		field: 'phone',
		headerName: 'Phone',
		width: 150,
	},
];
export const hotelColumns = [
	{ field: '_id', headerName: 'ID', width: 300 },
	{
		field: 'name',
		headerName: 'Name',
		width: 250,
	},
	{
		field: 'type',
		headerName: 'Type',
		width: 120,
	},
	{
		field: 'title',
		headerName: 'Title',
		width: 300,
	},
	{
		field: 'city',
		headerName: 'City',
		width: 130,
	},
];
export const roomColumns = [
	{ field: '_id', headerName: 'ID', width: 250 },
	{
		field: 'title',
		headerName: 'Title',
		width: 230,
	},
	{
		field: 'desc',
		headerName: 'Description',
		width: 200,
	},
	{
		field: 'price',
		headerName: 'Price',
		width: 100,
	},
	{
		field: 'maxPeople',
		headerName: 'Max People',
		width: 100,
	},
];
