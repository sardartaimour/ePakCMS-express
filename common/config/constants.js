const constant = {
	environments: {
		PRODUCTION: 'production',
		DEV: 'dev',
	},
	genders: {
		MALE: 'Male',
		FEMALE: 'Female',
		OTHER: 'Other'
	},
	document_refrence_type: {
		OTHER_DOCUMENTS: 'Others', // such as NIC etc
		EDUCTIONAL_DOCUMENTS: 'Educational',
		ACHEIVEMENT_DOCUMENTS: 'Acheivements',
		EXPERIENCE_LETTER: 'Experience-Letter'
	},
	employee_job_type: {
		PERMANENT: 'Permanent',
		TEMPORARY: 'Temporary',
		PARTTIME: 'Part-time',
		INTERNSHIP: 'Internship',
		HOUSEJOB: 'House-job'
	},
	employee_acheivements_type: {
		CERTIFICATE: 'Certificate',
		REWARD: 'Reward',
		ACHEIVEMENT: 'Acheivement'
	},
	primary_roles: {
		SUPER_ADMIN: 'Super Admin',
		PHYAICIAN: 'Physician',
		EMPLOYEE: 'Employee'
	},
	secondary_roles: {
		CLINIC_ADMIN: 'Clinic Admin',
		RECEPTIONIST: 'Receptionist',
		ENTRY_OPERATOR: 'Entry Operator'
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
		FREE: 'Free',
		SUBSCRIPTION: 'Subscription',
		TRIAL: 'Trial'
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