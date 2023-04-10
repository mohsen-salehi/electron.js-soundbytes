import React from 'react';

function Antenna() {
    return (
        <div className=' mt-3 d-flex align-items-center'>
            <label className='col-3' htmlFor="sys_ssn">
                Antenna
            </label>
            <select className="form-select custom-select antenna-select" id="tx_antenna" name="tx_antenna">
                <option value="ISOTROPIC">Isotropic</option>
                <option value="o-2el10m">2 El. Yagi @10m</option>
                <option value="o-3el10m">3 El. Yagi @10m</option>
                <option value="o-3el15m">3 El. Yagi @15m</option>
                <option value="o-3el20m">3 El. Yagi @20m</option>
                <option value="o-3el25m">3 El. Yagi @25m</option>
                <option value="o-3el30m">3 El. Yagi @30m</option>
                <option value="o-3el40m">3 El. Yagi @40m</option>
                <option value="o-3el60m">3 El. Yagi @60m</option>
                <option value="o-5el10m">5 El. Yagi @10m</option>
                <option value="o-5el15m">5 El. Yagi @15m</option>
                <option value="o-5el20m">5 El. Yagi @25m</option>
                <option value="o-5el30m">5 El. Yagi @30m</option>
                <option value="o-5el40m">5 El. Yagi @40m</option>
                <option value="o-5el60m">5 El. Yagi @60m</option>
                <option value="o-8el10m">8 El. Yagi @10m</option>
                <option value="o-8el15m">8 El. Yagi @15m</option>
                <option value="o-8el20m">8 El. Yagi @25m</option>
                <option value="o-8el30m">8 El. Yagi @30m</option>
                <option value="o-8el40m">8 El. Yagi @40m</option>
                <option value="o-8el60m">8 El. Yagi @60m</option>
                <option value="o-cushcraft_r5">Cushcraft R5 @8m</option>
                <option value="o-d05m">Dipole @5m</option>
                <option value="o-d10m">Dipole @10m</option>
                <option value="o-d15m">Dipole @15m</option>
                <option value="o-d20m">Dipole @20m</option>
                <option value="o-d25m">Dipole @25m</option>
                <option value="o-d30m">Dipole @30m</option>
                <option value="o-d40m">Dipole @40m</option>
                <option value="o-d60m">Dipole @60m</option>
                <option value="o-v14">1/4 λ Vertical</option>
                <option value="o-v14gd">1/4 λ Vertical (Good Gnd)</option>
                <option value="o-v32">3/2 λ Vertical</option>
                <option value="o-v58">5/8 λ Vertical</option>
            </select>
        </div>
    );
}

export default Antenna;