import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography/Typography'
import React, { ReactNode } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton/IconButton';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import styled from '@mui/material/styles/styled';
import { MoneyType } from '../../Model/MoneyType';

interface MoneyCardProps {
    backgroundColor:string,
    title:string,
    icon:ReactNode,
    type:string
}

const MoneyCard = ({backgroundColor,title,icon,type}: MoneyCardProps) => {
    const moneyArr = useSelector((state: { money: MoneyType[] }) => state.money)
    const CustomIconBtn = styled(IconButton)({
        color: '#fff'
    })

    return (
        <Grid container item xs={12} md={5.8}  my={2}  mx={1.5}
              bgcolor={backgroundColor} p={2} borderRadius={2} color={'common.white'}>
            <Grid container item xs={12}>
                <Grid item xs={6}>
                    <Typography>
                        {title}
                    </Typography>
                </Grid>
                <Grid display={'flex'} justifyContent={'flex-end'} item xs={6}>
                    {icon}
                </Grid>
                {moneyArr.filter((money:MoneyType) => money.type === type).map(m => (
                    <Grid key={m.id} container item xs={12} alignItems={'center'}>
                        <Grid item xs={4.5}>
                            {m.title}
                        </Grid>
                        <Grid item xs={4.5}>
                            {m.price} تومان
                        </Grid>
                        <Grid item xs={1.5}>
                            <CustomIconBtn>
                                <DeleteIcon/>
                            </CustomIconBtn>
                        </Grid>
                        <Grid item xs={1.5}>
                            <CustomIconBtn>
                                <ModeEditIcon/>
                            </CustomIconBtn>
                        </Grid>
                    </Grid>
                ))}
            </Grid>
        </Grid>
    )
}

export default MoneyCard