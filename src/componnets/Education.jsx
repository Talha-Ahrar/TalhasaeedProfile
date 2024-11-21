import { EDUCATION } from '../constants';

function Education() {
  return (
    <div className="pb-4">
      <h2 className="my-20 text-center text-4xl">Education</h2>
      <div>
        {EDUCATION.map((Education, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            {/* Experience Year */}
            <div className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-stone-400">{Education.year}</p>
            </div>

            {/* Role and Technologies */}
            <div className="w-full max-w-xl lg:w-3/4">
              <h3 className="mb-2 font-semibold">
                {/* {Education.role} -{" "} */}
                <span className="text-sm text-stone-500">{Education.Uni}</span>
              </h3>
              <p className="mb-4 text-stone-400">{Education.Degree}</p>

              {/* Technologies */}
         
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
