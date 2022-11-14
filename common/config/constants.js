const constant = {
	environments: {
		PRODUCTION: 'production',
		DEV: 'dev',
	},
	roles: {
		SUPER_ADMIN: 'super_admin',
		CLINIC_ADMIN: 'clinic_admin',
		RECEPTIONIST: 'receptionist',
		PATIENT: 'patient'
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
	}
};

Object.freeze(constant);

exports.bootstrap = _ => {
    global.constant = constant;
}