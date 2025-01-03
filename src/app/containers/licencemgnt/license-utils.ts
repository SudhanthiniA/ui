export class LicenseUtils {
    numberOnly(event): boolean {
        const charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    }

    combineArr(oldArr, newArr) {
        // console.log('oldArr::', oldArr);
        // console.log('newArr::', newArr);

        if (newArr.length > 0) {

            newArr.forEach(element => {
                const ind = oldArr.findIndex((item) => item.name === element.name);
                if (ind !== -1) {
                    oldArr[ind] = element;
                } else {
                    oldArr.push(element);
                }
            });

        }
        return oldArr;
    }

    invertDate(date) {
        if (!date) {
            return date;
        }
        date = date.split('-');
        date = date[2] + '-' + date[1] + '-' + date[0];
        return date;
    }
}
