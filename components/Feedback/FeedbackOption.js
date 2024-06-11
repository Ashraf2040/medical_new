import { useState } from 'react';
import Select from 'react-select';
import countryList from 'react-select-country-list';

const FeedbackOption = ({feedBackData,onChanges}) => {
    const [gender, setGender] = useState('');
    const [age, setAge] = useState('');
    const [nationality, setNationality] = useState(null);

    const options = countryList().getData();

    return (
        <div className='mb-2'>

            <div className='my-2'>
                <label>Gender</label>
                <div className='flex gap-2 items-center'>
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="male"
                            checked={feedBackData?.gender === 'male'}
                            onChange={(e) =>    onChanges('gender',e?.target?.value)}
                        />
                        Male
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="female"
                            checked={feedBackData?.gender === 'female'}
                            onChange={(e) =>    {
                                console.log(e.target.value,onChanges('gender',e?.target?.value))
                            }}
                        />
                        Female
                    </label>
                </div>
            </div>

            <div className='flex items-center gap-8 justify-between'>
                <div className='my-2 w-[100px] flex items-center'>
                    <label>Age: </label>
                    <input
                        type="number"
                        name="age"
                        value={feedBackData?.age||""}
                        min={0}
                        className='w-[100px] border p-1 rounded-sm outline-none ring-0 focus:outline-none focus:ring-0 bg-transparent'
                        onChange={(e) =>    onChanges('age',e?.target?.value)}
                    />
                </div>

                <div className='my-2 flex items-center w-[60%]'>
                    <label>Nationality: </label>
                    <Select
                        className='p-1 rounded-sm outline-none ring-0 focus:outline-none focus:ring-0'
                        options={options}
                        value={nationality}
                        onChange={(e)=>{
                            onChanges('nationality',e?.value)
                            setNationality(e)
                        }}
                    />
                </div>
            </div>

        </div>
    );
};

export default FeedbackOption;
