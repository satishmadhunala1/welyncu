import React, { useState } from 'react';
import { MdOutlineFileUpload, MdVerified } from "react-icons/md";
import { COUNTRIES } from "../../Constants/constants";
import { RxCross2 } from "react-icons/rx";

const EditProfile = () => {
    const [activeTab, setActiveTab] = useState('basic');
    const [progress, setProgress] = useState(35);
    const [nationality, setNationality] = useState('');
    const [residence, setResidence] = useState('');
    const [showNationalityDropdown, setShowNationalityDropdown] = useState(false);
    const [showResidenceDropdown, setShowResidenceDropdown] = useState(false);
    const [searchNationality, setSearchNationality] = useState('');
    const [searchResidence, setSearchResidence] = useState('');

    // State for new fields with tag support
    const [jobTypes, setJobTypes] = useState([]);
    const [workModes, setWorkModes] = useState([]);
    const [locations, setLocations] = useState([]);
    const [minSalary, setMinSalary] = useState([]);
    const [skills, setSkills] = useState([]);
    const [languages, setLanguages] = useState([]);
    const [skillInput, setSkillInput] = useState('');
    const [languageInput, setLanguageInput] = useState('');
    const [showJobTypeDropdown, setShowJobTypeDropdown] = useState(false);
    const [showWorkModeDropdown, setShowWorkModeDropdown] = useState(false);
    const [showLocationDropdown, setShowLocationDropdown] = useState(false);
    const [showSalaryDropdown, setShowSalaryDropdown] = useState(false);
    const [searchLocation, setSearchLocation] = useState('');

    const tabs = [
        { id: 'basic', label: 'Basic Info' },
        { id: 'professional', label: 'Professional Info' },
        { id: 'work', label: 'Work Experience' },
        { id: 'education', label: 'Education' },
        { id: 'courses', label: 'Courses' },
        { id: 'social', label: 'Social Media' },
    ];

    // Options for dropdowns
    const JOB_TYPES = ['Full Time', 'Part Time', 'Contract', 'Freelance', 'Internship'];
    const WORK_MODES = ['Remote', 'Hybrid', 'On-site'];
    const SALARY_RANGES = ['$30,000 - $50,000', '$50,000 - $70,000', '$70,000 - $90,000', '$90,000 - $120,000', '$120,000+'];

    // Filter countries based on search input
    const filteredNationalityCountries = COUNTRIES.filter(country =>
        country.name.toLowerCase().includes(searchNationality.toLowerCase())
    );

    const filteredResidenceCountries = COUNTRIES.filter(country =>
        country.name.toLowerCase().includes(searchResidence.toLowerCase())
    );

    const filteredLocations = COUNTRIES.filter(country =>
        country.name.toLowerCase().includes(searchLocation.toLowerCase())
    );

    // Handle selections
    const handleNationalitySelect = (countryName) => {
        setNationality(countryName);
        setShowNationalityDropdown(false);
        setSearchNationality('');
    };

    const handleResidenceSelect = (countryName) => {
        setResidence(countryName);
        setShowResidenceDropdown(false);
        setSearchResidence('');
    };

    const handleJobTypeSelect = (type) => {
        if (!jobTypes.includes(type)) {
            setJobTypes([...jobTypes, type]);
        }
        setShowJobTypeDropdown(false);
    };

    const handleWorkModeSelect = (mode) => {
        if (!workModes.includes(mode)) {
            setWorkModes([...workModes, mode]);
        }
        setShowWorkModeDropdown(false);
    };

    const handleLocationSelect = (location) => {
        if (!locations.includes(location)) {
            setLocations([...locations, location]);
        }
        setShowLocationDropdown(false);
        setSearchLocation('');
    };

    const handleSalarySelect = (salary) => {
        if (!minSalary.includes(salary)) {
            setMinSalary([...minSalary, salary]);
        }
        setShowSalaryDropdown(false);
    };

    // Handle tag removal
    const removeJobType = (type) => {
        setJobTypes(jobTypes.filter(item => item !== type));
    };

    const removeWorkMode = (mode) => {
        setWorkModes(workModes.filter(item => item !== mode));
    };

    const removeLocation = (location) => {
        setLocations(locations.filter(item => item !== location));
    };

    const removeSalary = (salary) => {
        setMinSalary(minSalary.filter(item => item !== salary));
    };

    const removeSkill = (skill) => {
        setSkills(skills.filter(item => item !== skill));
    };

    const removeLanguage = (language) => {
        setLanguages(languages.filter(item => item !== language));
    };

    // Handle skills and languages input
    const handleSkillKeyDown = (e) => {
        if (e.key === 'Enter' && skillInput.trim()) {
            setSkills([...skills, skillInput.trim()]);
            setSkillInput('');
            e.preventDefault();
        }
    };

    const handleLanguageKeyDown = (e) => {
        if (e.key === 'Enter' && languageInput.trim()) {
            setLanguages([...languages, languageInput.trim()]);
            setLanguageInput('');
            e.preventDefault();
        }
    };

    const renderFormContent = () => {
        switch (activeTab) {
            case 'basic':
                return (
                    <div className="space-y-4">
                        <div className='bg-green-700 relative flex flex-col items-center justify-center w-full p-4 rounded-lg'>
                            <div className='flex items-center gap-2'>
                                <MdOutlineFileUpload size={25} />
                                <p className='font-bold text-[20px]'>Upload resume</p>
                            </div>
                            <p className='text-[14px] text-center mt-2'>Automatically Fill Your Profile</p>
                            <p className='bg-black px-3 py-2 rounded-lg font-semibold text-[10px] absolute top-2 right-5'>Recommended</p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            {/* Profile Picture */}
                            <div>
                                <div className='flex items-center justify-between'>
                                    <div>
                                        <label className="block text-sm font-medium text-white mb-1">Profile Picture</label>
                                        <div className='bg-[#1A1A1E] border border-gray-800 p-2 rounded-lg flex items-center gap-2 w-fit'>
                                            <MdOutlineFileUpload size={25} />
                                            <p className='text-[13px]'>Update photo</p>
                                        </div>
                                    </div>
                                    <div>
                                        <img src='/hero3.jpg' className='w-[50px] h-[50px] rounded-full object-cover mt-2' />
                                    </div>
                                </div>
                                <p className='text-[11px] text-gray-400 mt-1'>Upload a JPG or PNG image for your profile, preferably in a square shape</p>
                            </div>

                            {/* Name */}
                            <div>
                                <label className="block text-sm font-medium text-white mb-1">Name*</label>
                                <input type="text" placeholder='e.g. John Doe' value={"Undertaker"} className='w-full bg-[#1A1A1E] border text-[13px] border-gray-800 rounded-md px-4 py-2 focus:outline-none' />
                                <p className='text-[11px] text-gray-400 mt-1'>Use your full name so people can find you more easily.</p>
                            </div>

                            {/* Username */}
                            <div>
                                <label className="block text-sm font-medium text-white mb-1">Username*</label>
                                <input type="text" placeholder='Enter your username' value={"Undertaker007"} className='w-full bg-[#1A1A1E] text-[13px] border border-gray-800 rounded-md px-4 py-2 focus:outline-none' />
                                <p className='text-[11px] text-gray-400 mt-1'>Your username will create a personalized URL for your profile.</p>
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-sm font-medium text-white mb-1">Email*</label>
                                <input type="text" placeholder='Enter your email' value={"undertaker@skillswap.com"} className='w-full bg-[#1A1A1E] text-[13px] border border-gray-800 rounded-md px-4 py-2 focus:outline-none' />
                                <p className='text-[11px] text-gray-400 mt-1'>Enter your email to receive offers matching your skills. This email stays private.</p>
                            </div>

                            {/* Nationality */}
                            <div className="relative">
                                <label className="block text-sm font-medium text-white mb-1">Nationality</label>
                                <div
                                    className="w-full bg-[#1A1A1E] text-[13px] border border-gray-800 rounded-md px-4 py-2 focus:outline-none cursor-pointer"
                                    onClick={() => setShowNationalityDropdown(!showNationalityDropdown)}
                                >
                                    {nationality || 'Select Nationality'}
                                </div>
                                {showNationalityDropdown && (
                                    <div className="absolute z-10 w-full mt-1 bg-[#1A1A1E] border border-gray-800 rounded-md shadow-lg max-h-60 overflow-auto">
                                        <input
                                            type="text"
                                            placeholder="Search countries..."
                                            className="w-full p-2 bg-[#1A1A1E] border-b border-gray-700 focus:outline-none"
                                            value={searchNationality}
                                            onChange={(e) => setSearchNationality(e.target.value)}
                                            autoFocus
                                        />
                                        <div className="max-h-48 overflow-y-auto">
                                            {filteredNationalityCountries.map((country) => (
                                                <div
                                                    key={country.code}
                                                    className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                                                    onClick={() => handleNationalitySelect(country.name)}
                                                >
                                                    {country.name}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                                <p className='text-[11px] text-gray-400 mt-1'>Your main nationality, regardless of where you currently are or your current residence.</p>
                            </div>

                            {/* Country of Residence */}
                            <div className="relative">
                                <label className="block text-sm font-medium text-white mb-1">Country of Residence</label>
                                <div
                                    className="w-full bg-[#1A1A1E] text-[13px] border border-gray-800 rounded-md px-4 py-2 focus:outline-none cursor-pointer"
                                    onClick={() => setShowResidenceDropdown(!showResidenceDropdown)}
                                >
                                    {residence || 'Select Country'}
                                </div>
                                {showResidenceDropdown && (
                                    <div className="absolute z-10 w-full mt-1 bg-[#1A1A1E] border border-gray-800 rounded-md shadow-lg max-h-60 overflow-auto">
                                        <input
                                            type="text"
                                            placeholder="Search countries..."
                                            className="w-full p-2 bg-[#1A1A1E] border-b border-gray-700 focus:outline-none"
                                            value={searchResidence}
                                            onChange={(e) => setSearchResidence(e.target.value)}
                                            autoFocus
                                        />
                                        <div className="max-h-48 overflow-y-auto">
                                            {filteredResidenceCountries.map((country) => (
                                                <div
                                                    key={country.code}
                                                    className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                                                    onClick={() => handleResidenceSelect(country.name)}
                                                >
                                                    {country.name}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                                <p className='text-[11px] text-gray-400 mt-1'>Your current residence country.</p>
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-white mb-1">About</label>
                            <textarea rows="4" placeholder='About' className='w-full bg-[#1A1A1E] text-[13px] border border-gray-800 rounded-md px-4 py-2 focus:outline-none'></textarea>
                            <p className='text-[11px] text-gray-400 mt-1'>You can write about your years of experience, industry, or skills. People also talk about their achievements or previous job experiences. Please do not include any URL nor email address.</p>
                        </div>
                    </div>
                );
            case 'professional':
                return (
                    <div className="space-y-4">
                        <div className='bg-green-700 relative flex flex-col items-center justify-center w-full p-4 rounded-lg'>
                            <div className='flex items-center gap-2'>
                                <MdOutlineFileUpload size={25} />
                                <p className='font-bold text-[20px]'>Upload resume</p>
                            </div>
                            <p className='text-[14px] text-center mt-2'>Automatically Fill Your Profile</p>
                            <p className='bg-black px-3 py-2 rounded-lg font-semibold text-[10px] absolute top-2 right-5'>Recommended</p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            {/* Position */}
                            <div>
                                <label className="block text-sm font-medium text-white mb-1">Position/Desired Position*</label>
                                <input type="text" placeholder='Position' className='w-full bg-[#1A1A1E] border text-[13px] border-gray-800 rounded-md px-4 py-2 focus:outline-none' />
                                <p className='text-[11px] text-gray-400 mt-1'>Current or desired position e.g. 'React Developer'.</p>
                            </div>

                            {/* Availability */}
                            <div>
                                <div className='flex items-center justify-between'>
                                    <div>
                                        <label className="block text-sm font-medium text-white mb-1">Availability</label>
                                        <div className='bg-[#1A1A1E] border border-gray-800 p-2 rounded-lg flex items-center gap-2 w-fit'>
                                            <input type='checkbox' />
                                            <p className='text-[13px]'>Open to work</p>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-2 border border-gray-800 px-2 rounded-lg'>
                                        <p className='text-[13px]'>Available</p>
                                        <MdVerified className='text-green-700' />
                                    </div>
                                </div>
                                <p className='text-[11px] text-gray-400 mt-1'>Boost your visibility to recruiters and increase job offers.</p>
                            </div>

                            {/* Experience */}
                            <div>
                                <label className="block text-sm font-medium text-white mb-1">Experience*</label>
                                <input type="text" placeholder='Experience' className='w-full bg-[#1A1A1E] text-[13px] border border-gray-800 rounded-md px-4 py-2 focus:outline-none' />
                                <p className='text-[11px] text-gray-400 mt-1'>Consider your current and past work experiences.</p>
                            </div>

                            {/* Resume */}
                            <div>
                                <div className='flex items-center justify-between'>
                                    <div>
                                        <label className="block text-sm font-medium text-white mb-1">Resume*</label>
                                        <div className='bg-[#1A1A1E] border border-gray-800 p-2 rounded-lg flex items-center gap-2 w-fit'>
                                            <MdOutlineFileUpload size={25} />
                                            <p className='text-[13px]'>Upload resume</p>
                                        </div>
                                    </div>
                                    <div className='flex items-center gap-2 border border-gray-800 px-2 rounded-lg'>
                                        <p className='text-[13px]'>Not attached</p>
                                        <RxCross2  className='text-red-700' />
                                    </div>
                                </div>
                                <p className='text-[11px] text-gray-400 mt-1'>Upload your CV or Resume in PDF format.</p>
                            </div>
                        </div>

                        {/* Skills */}
                        <div>
                            <label className="block text-sm font-medium text-white mb-1">Skills</label>
                            <div className="w-full bg-[#1A1A1E] border border-gray-800 rounded-md px-4 py-2 flex flex-wrap gap-2 items-center min-h-[40px]">
                                {skills.map((skill, index) => (
                                    <div key={index} className="bg-gray-800 text-white px-2 py-1 rounded-sm flex items-center gap-1 text-[12px]">
                                        {skill}
                                        <RxCross2  className="cursor-pointer text-white bg-red-700 rounded-full" onClick={() => removeSkill(skill)} />
                                    </div>
                                ))}
                                <input
                                    type="text"
                                    placeholder={skills.length === 0 ? "Add skills and press Enter" : ""}
                                    className="flex-1 bg-transparent text-[13px] focus:outline-none"
                                    value={skillInput}
                                    onChange={(e) => setSkillInput(e.target.value)}
                                    onKeyDown={handleSkillKeyDown}
                                />
                            </div>
                            <p className='text-[11px] text-gray-400 mt-1'>Knowledge of specific software/hardware, programming languages, project management expertise, customer service abilities, etc. Press Enter to add.</p>
                        </div>

                        {/* Languages */}
                        <div>
                            <label className="block text-sm font-medium text-white mb-1">Language*</label>
                            <div className="w-full bg-[#1A1A1E] border border-gray-800 rounded-md px-4 py-2 flex flex-wrap gap-2 items-center min-h-[40px]">
                                {languages.map((language, index) => (
                                    <div key={index} className="bg-gray-800 text-white px-2 py-1 rounded-sm flex items-center gap-1 text-[12px]">
                                      {language}
                                        <RxCross2  className="cursor-pointer text-white bg-red-700 rounded-full" onClick={() => removeLanguage(language)} />
                                    </div>
                                ))}
                                <input
                                    type="text"
                                    placeholder={languages.length === 0 ? "Add languages and press Enter" : ""}
                                    className="flex-1 bg-transparent text-[13px] focus:outline-none"
                                    value={languageInput}
                                    onChange={(e) => setLanguageInput(e.target.value)}
                                    onKeyDown={handleLanguageKeyDown}
                                />
                            </div>
                            <p className='text-[11px] text-gray-400 mt-1'>Languages you speak fluently. Press Enter to add.</p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {/* Preferred Job Types */}
                            <div className="relative">
                                <label className="block text-sm font-medium text-white mb-1">Preferred Job Types*</label>
                                <div
                                    className="w-full bg-[#1A1A1E] border border-gray-800 rounded-md px-4 py-2 flex flex-wrap gap-2 items-center min-h-[40px] cursor-pointer"
                                    onClick={() => setShowJobTypeDropdown(!showJobTypeDropdown)}
                                >
                                    {jobTypes.length === 0 && <span className="text-gray-400 text-[13px]">Select Job Types</span>}
                                    {jobTypes.map((type, index) => (
                                        <div key={index} className="bg-gray-800 text-white px-2 py-1 rounded-sm flex items-center gap-1 text-[12px]">
                                            {type}
                                            <RxCross2  className="cursor-pointer text-white bg-red-700 rounded-full" onClick={(e) => { e.stopPropagation(); removeJobType(type); }} />
                                        </div>
                                    ))}
                                </div>
                                {showJobTypeDropdown && (
                                    <div className="absolute z-10 w-full mt-1 bg-[#1A1A1E] border border-gray-800 rounded-md shadow-lg max-h-60 overflow-auto">
                                        {JOB_TYPES.map((type) => (
                                            <div
                                                key={type}
                                                className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                                                onClick={() => handleJobTypeSelect(type)}
                                            >
                                                {type}
                                            </div>
                                        ))}
                                    </div>
                                )}
                                <p className='text-[11px] text-gray-400 mt-1'>Employment arrangements, such as Full Time, Part Time, etc.</p>
                            </div>

                            {/* Minimum Yearly Salary */}
                            <div className="relative">
                                <label className="block text-sm font-medium text-white mb-1">Minimum Yearly Salary*</label>
                                <div
                                    className="w-full bg-[#1A1A1E] border border-gray-800 rounded-md px-4 py-2 flex flex-wrap gap-2 items-center min-h-[40px] cursor-pointer"
                                    onClick={() => setShowSalaryDropdown(!showSalaryDropdown)}
                                >
                                    {minSalary.length === 0 && <span className="text-gray-400 text-[13px]">Select Salary Range</span>}
                                    {minSalary.map((salary, index) => (
                                        <div key={index} className="bg-gray-800 text-white px-2 py-1 rounded-sm flex items-center gap-1 text-[12px]">
                                            {salary}
                                            <RxCross2  className="cursor-pointer text-white bg-red-700 rounded-full" onClick={(e) => { e.stopPropagation(); removeSalary(salary); }} />
                                        </div>
                                    ))}
                                </div>
                                {showSalaryDropdown && (
                                    <div className="absolute z-10 w-full mt-1 bg-[#1A1A1E] border border-gray-800 rounded-md shadow-lg max-h-60 overflow-auto">
                                        {SALARY_RANGES.map((salary) => (
                                            <div
                                                key={salary}
                                                className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                                                onClick={() => handleSalarySelect(salary)}
                                            >
                                                {salary}
                                            </div>
                                        ))}
                                    </div>
                                )}
                                <p className='text-[11px] text-gray-400 mt-1'>Minimum expected annual salary in USD (before taxes).</p>
                            </div>

                            {/* Preferred Work Modes */}
                            <div className="relative">
                                <label className="block text-sm font-medium text-white mb-1">Preferred Work Modes*</label>
                                <div
                                    className="w-full bg-[#1A1A1E] border border-gray-800 rounded-md px-4 py-2 flex flex-wrap gap-2 items-center min-h-[40px] cursor-pointer"
                                    onClick={() => setShowWorkModeDropdown(!showWorkModeDropdown)}
                                >
                                    {workModes.length === 0 && <span className="text-gray-400 text-[13px]">Select Work Modes</span>}
                                    {workModes.map((mode, index) => (
                                        <div key={index} className="bg-gray-800 text-white px-2 py-1 rounded-sm flex items-center gap-1 text-[12px]">
                                            {mode}
                                            <RxCross2  className="cursor-pointer text-white bg-red-700 rounded-full" onClick={(e) => { e.stopPropagation(); removeWorkMode(mode); }} />
                                        </div>
                                    ))}
                                </div>
                                {showWorkModeDropdown && (
                                    <div className="absolute z-10 w-full mt-1 bg-[#1A1A1E] border border-gray-800 rounded-md shadow-lg max-h-60 overflow-auto">
                                        {WORK_MODES.map((mode) => (
                                            <div
                                                key={mode}
                                                className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                                                onClick={() => handleWorkModeSelect(mode)}
                                            >
                                                {mode}
                                            </div>
                                        ))}
                                    </div>
                                )}
                                <p className='text-[11px] text-gray-400 mt-1'>'Remote' means work from anywhere. 'Hybrid' is a mix of on-site and remote. 'On-site' requires physical presence at the workplace.</p>
                            </div>

                            {/* Preferred Locations */}
                            <div className="relative">
                                <label className="block text-sm font-medium text-white mb-1">Locations*</label>
                                <div
                                    className="w-full bg-[#1A1A1E] border border-gray-800 rounded-md px-4 py-2 flex flex-wrap gap-2 items-center min-h-[40px] cursor-pointer"
                                    onClick={() => setShowLocationDropdown(!showLocationDropdown)}
                                >
                                    {locations.length === 0 && <span className="text-gray-400 text-[13px]">Select Locations</span>}
                                    {locations.map((location, index) => (
                                        <div key={index} className="bg-gray-800 text-white px-2 py-1 rounded-sm flex items-center gap-1 text-[12px]">
                                            {location}
                                            <RxCross2  className="cursor-pointer text-white bg-red-700 rounded-full" onClick={(e) => { e.stopPropagation(); removeLocation(location); }} />
                                        </div>
                                    ))}
                                </div>
                                {showLocationDropdown && (
                                    <div className="absolute z-10 w-full mt-1 bg-[#1A1A1E] border border-gray-800 rounded-md shadow-lg max-h-60 overflow-auto">
                                        <input
                                            type="text"
                                            placeholder="Search locations..."
                                            className="w-full p-2 bg-[#1A1A1E] border-b border-gray-700 focus:outline-none"
                                            value={searchLocation}
                                            onChange={(e) => setSearchLocation(e.target.value)}
                                            autoFocus
                                        />
                                        <div className="max-h-48 overflow-y-auto">
                                            {filteredLocations.map((country) => (
                                                <div
                                                    key={country.code}
                                                    className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
                                                    onClick={() => handleLocationSelect(country.name)}
                                                >
                                                    {country.name}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                                <p className='text-[11px] text-gray-400 mt-1'>Preferred work locations.</p>
                            </div>
                        </div>
                    </div>
                );
            case 'work':
                return (
                   <div>
                       <h2 className="text-xl font-bold mb-4">{tabs.find(tab => tab.id === activeTab)?.label}</h2>
                       <p className="text-gray-400">This section is coming soon. Focus on completing the basic information first.</p>
                   </div>
                );
            default:
                return (
                    <div className="space-y-4">
                        <h2 className="text-xl font-bold mb-4">{tabs.find(tab => tab.id === activeTab)?.label}</h2>
                        <p className="text-gray-400">This section is coming soon. Focus on completing the basic information first.</p>
                    </div>
                );
        }
    };

    const radius = 40;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (progress / 100) * circumference;

    return (
        <div className='min-h-screen px-4 md:px-10 flex flex-col items-center text-white pb-10'>
            <h1 className='font-extrabold font-barlow text-3xl md:text-[45px] text-center'>Make an <span className='text-green-600'>outstanding profile</span></h1>
            <p className='text-gray-400 text-sm md:text-[16px] mt-3 text-center max-w-3xl'>
                Ready to showcase your skills and expertise? Elevate your professional presence on our platform by updating your profile. Highlight your background, talents, and aspirations to connect with like-minded individuals, potential employers, and collaborators.
            </p>

            <div className='border border-gray-700 rounded-xl w-full max-w-5xl mt-10'>
                <div className='flex flex-col md:flex-row'>
                    <div className='md:w-1/3 border-b md:border-b-0 border-gray-700 p-4 md:p-6'>
                        <div className="space-y-2">
                            <div className="relative flex flex-col items-center justify-center mt-2 mb-2">
                                <svg className="w-28 h-28 transform -rotate-90" viewBox="0 0 100 100">
                                    <circle
                                        cx="50"
                                        cy="50"
                                        r={radius}
                                        stroke="currentColor"
                                        strokeWidth="15"
                                        fill="transparent"
                                        className="text-gray-700"
                                    />
                                    <circle
                                        cx="50"
                                        cy="50"
                                        r={radius}
                                        stroke="currentColor"
                                        strokeWidth="15"
                                        fill="transparent"
                                        strokeDasharray={circumference}
                                        strokeDashoffset={offset}
                                        strokeLinecap="round"
                                        className="text-green-600 transition-all duration-500"
                                    />
                                </svg>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-white text-lg font-bold">{progress}%</span>
                                </div>
                            </div>

                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`w-full text-left font-semibold text-sm md:text-[15px] px-4 py-3 rounded-lg transition-colors duration-200 ${activeTab === tab.id
                                        ? 'bg-green-600 text-white'
                                        : 'text-gray-300 hover:bg-gray-700/50 hover:text-white'
                                        }`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className='md:w-2/3 p-4 md:p-6'>
                        {renderFormContent()}
                        <div className="flex justify-end mt-8 space-x-4">
                            <button className="px-6 py-2 border border-gray-600 text-gray-300 rounded-md hover:bg-gray-700 transition-colors duration-200">
                                Cancel
                            </button>
                            <button
                                className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors duration-200"
                                onClick={() => setProgress(progress < 100 ? progress + 10 : 100)}
                            >
                                Save Changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditProfile;