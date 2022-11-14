'use strict';
module.exports = (sequelize, DataTypes) => {
    const Employee = sequelize.define('Employee', {
        employee_id: {
            type: DataTypes.INTEGER(10),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },

        title: {
            type: DataTypes.ENUM(Object.keys(constant.gender_titles)),
            allowNull: false,
            defaultValue: constant.gender_titles.MR
        },

        employee_no = CGColumn(String(64), nullable=True) // check needs here or in ClinicEmployee model
    email = CGColumn(String(64), nullable=True)
    mobile = CGColumn(String(32), nullable=True)
    username = CGColumn(String(64), nullable=False, unique=True)
    password = CGColumn(String(32), nullable=False, secure=True)

    last_success_login = CGColumn(BigInteger, nullable=True)
    last_failed_login = CGColumn(BigInteger, nullable=True)
    failed_login_attempts = CGColumn(Integer, default=0, nullable=False)
    is_activated = CGColumn(Boolean, default=True, nullable=False)
    phone_verified = CGColumn(Boolean, default=False, nullable=False)
    is_blocked = CGColumn(Boolean, default=False, nullable=False)
    blocked_on = CGColumn(Boolean, default=False, nullable=False)
    block_reason = CGColumn(String(64), nullable=True)



        primary_role: {
            type: DataTypes.ENUM(Object.keys(constant.primary_roles)),
            allowNull: false,
            defaultValue: constant.primary_roles.EMPLOYEE,
        },
        clinic_address: {
            type: DataTypes.STRING(300),
            allowNull: false
        },
        clinic_logo_url: {
            type: DataTypes.STRING(300)
        },
        city_name: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        state: {
            type: DataTypes.STRING(64)
        },
        zip_code: {
            type: DataTypes.STRING(64)
        },
        phone: {
            type: DataTypes.STRING(64)
        },
        enable_sms: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,        
        },
        subscription_type: {
            type: DataTypes.ENUM(Object.keys(constant.subscription_type)),
            allowNull: false,
            defaultValue: constant.subscription_type.TRIAL,  
        },
        subscription_upto: {
            type: DataTypes.DATE,
            defaultValue: helper.moment(new Date()).add(1, 'months')
        }

    }, {
        freezeTableName: true,
        tableName: 'cms_clinics',
        underscored: true,
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        indexes: [
            {
                fields: ['clinic_name', 'clinic_address']
            }
        ]
    });
    Employee.associate = function (models) {
        // associations can be defined here
    };
   
    return Employee;
};




image = CGColumn(String(256), nullable=True)
first_name = CGColumn(String(64), nullable=False)
middle_name = CGColumn(String(64), nullable=True)
last_name = CGColumn(String(64), nullable=False)
extra_name = CGColumn(String(64), nullable=True)

full_name = column_property(first_name + " " + last_name)
gender = CGColumn(String(64), nullable=False)
birth_date = CGColumn(BigInteger, nullable=True)
is_command_center = CGColumn(Boolean, nullable=False, default=False)

speciality_id = CGColumn(ForeignKey(Speciality.speciality_id, onupdate='RESTRICT', ondelete='RESTRICT'), nullable=True)
speciality = relationship(Speciality, remote_side=Speciality.speciality_id, foreign_keys=speciality_id, lazy='select')
license_no = CGColumn(String(64), nullable=True)

nationality_id = CGColumn(ForeignKey(Country.country_id, onupdate='RESTRICT', ondelete='RESTRICT'), nullable=True)
nationality = relationship(Country, remote_side=Country.country_id, foreign_keys=nationality_id, lazy='select')

ethnicity_id = CGColumn(ForeignKey(Ethnicity.ethnicity_id, onupdate='RESTRICT', ondelete='RESTRICT'), nullable=True)
ethnicity = relationship(Ethnicity, remote_side=Ethnicity.ethnicity_id, foreign_keys=ethnicity_id, lazy='select')

language_id = CGColumn(ForeignKey(Language.language_id, onupdate='RESTRICT', ondelete='RESTRICT'), nullable=True)
language = relationship(Language, remote_side=Language.language_id, foreign_keys=language_id, lazy='select')

system_language_id = CGColumn(ForeignKey(SystemLanguage.language_id, onupdate='RESTRICT', ondelete='RESTRICT'),
                       nullable=False)
system_language = relationship(SystemLanguage, remote_side=SystemLanguage.language_id, foreign_keys=system_language_id,
                               lazy='select')

religion_id = CGColumn(ForeignKey(Religion.religion_id, onupdate='RESTRICT', ondelete='RESTRICT'), nullable=True)
religion = relationship(Religion, remote_side=Religion.religion_id, foreign_keys=religion_id, lazy='select')

country_id = CGColumn(ForeignKey(Country.country_id, onupdate='RESTRICT', ondelete='RESTRICT'), nullable=True)
country = relationship(Country, remote_side=Country.country_id, foreign_keys=country_id, lazy='select')

city_id = CGColumn(ForeignKey(City.city_id, onupdate='RESTRICT', ondelete='RESTRICT'), nullable=True)
city = relationship(City, remote_side=City.city_id, foreign_keys=city_id, lazy='select')

mobile_phone = CGColumn(String(64), nullable=True)
landline_phone = CGColumn(String(64), nullable=True)
passport_id = CGColumn(String(64), nullable=True)
nic = CGColumn(String(64), nullable=True)
address_1 = CGColumn(String(512), nullable=True)
address_2 = CGColumn(String(512), nullable=True)
zip_code = CGColumn(String(64), nullable=True)

emergency_contact_person = CGColumn(String(64), nullable=True)
emergency_contact_phone = CGColumn(String(64), nullable=True)

employment_start_date = CGColumn(BigInteger, nullable=True)
employment_end_date = CGColumn(BigInteger, nullable=True)

other_notes = CGColumn(String(64), nullable=True)

date_added = CGColumn(BigInteger, nullable=False, default=func.unix_timestamp())
date_updated = CGColumn(BigInteger, nullable=False, default=func.unix_timestamp(), onupdate=func.unix_timestamp())

is_deleted = CGColumn(Boolean, nullable=False, default=False)
delete_comments = CGColumn(String(512), nullable=True)