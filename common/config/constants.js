const constant = {
	environments: {
		PRODUCTION: 'production',
		DEV: 'dev',
	},
	genders: {
		MALE: 'male',
		FEMALE: 'female',
		OTHER: 'other'
	},
	document_refrence_type: {
		OTHER_DOCUMENTS: 'other',
		EDUCTIONAL_DOCUMENTS: 'education',
		ACHEIVEMENT_DOCUMENTS: 'acheivement'
	},
	primary_roles: {
		SUPER_ADMIN: 'super admin',
		PHYAICIAN: 'physician',
		EMPLOYEE: 'employee'
	},
	secondary_roles: {
		CLINIC_ADMIN: 'clinic admin',
		RECEPTIONIST: 'receptionist',
		ENTRY_OPERATOR: 'entry operator'
	},
	appointment_status: {
		BOOKED: 'Booked',
		IN_PROGRESS: 'In Progress',
		PENDING: 'Pending',
		RESCHEDULED: 'Rescheduled',
		CANCELLED: 'Cancelled',
		MISSED: 'Missed',
		COMPLETED: 'Completed',
		CONFIRMED: 'Confirmed',
		AVAILABLE: 'Available',
		AVAILABLE_ON_CALL: 'Available On Call'
	},
	subscription_type: {
		FREE: 'free',
		SUBSCRIPTION: 'subscription',
		TRIAL: 'trial'
	},
	gender_titles: {
		DR: 'Dr',
		MR: 'Mr',
		MISS: 'Miss',
		MRS: 'Mrs',
		MS: 'Ms'
	}
};

Object.freeze(constant);

exports.bootstrap = _ => {
    global.constant = constant;
}