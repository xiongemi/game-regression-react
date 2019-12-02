import React from 'react';
import {
  Button,
  Checkbox,
  CircularProgress,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from '@material-ui/core';
import { FormikProps } from 'formik';

import { createRouterLinkForward } from '../../../shared/create-router-link-forward.util';
import { Routes } from '../../../types/routes.enum';
import { Game } from '../../../store/games/types/game.interface';

import { GameEditFormProps } from './game-edit-form-props.interface';

export class GameEditForm extends React.Component<GameEditFormProps & FormikProps<Game>> {
  componentDidUpdate(prevProps: GameEditFormProps & FormikProps<Game>) {
    if (this.props.isGameUpdated && !prevProps.isGameUpdated) {
      this.props.goBackToGames();
    }
  }

  deleteGame() {
    this.props.deleteGame(this.props.game);
  }

  render(): React.ReactNode {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <Paper className="ma3 pa3 flex justify-between bg-blue text-light" elevation={3}>
          <Typography variant="h6">{this.props.t('editGame')}</Typography>
          <div>
            <Button
              type="submit"
              color="primary"
              variant="contained"
              disabled={this.props.isUpdatePending}
            >
              {this.props.t('save')}
              {this.props.isUpdatePending && <CircularProgress size={20} />}
            </Button>
            <Button
              type="button"
              variant="contained"
              color="secondary"
              onClick={this.deleteGame.bind(this)}
              component={createRouterLinkForward(Routes.games)}
              disabled={this.props.isUpdatePending}
            >
              {this.props.t('delete')}
            </Button>
            <Button
              type="button"
              variant="contained"
              color="secondary"
              component={createRouterLinkForward(Routes.games)}
              disabled={this.props.isUpdatePending}
            >
              {this.props.t('cancel')}
            </Button>
          </div>
        </Paper>

        <Paper className="ma3 pa3" elevation={3}>
          <TextField
            fullWidth
            label={`${this.props.t('name')}:`}
            margin="normal"
            name="name"
            onChange={this.props.handleChange}
            onBlur={this.props.handleBlur}
            value={this.props.values.name}
            error={Boolean(this.props.errors.name)}
            helperText={this.props.errors.name && this.props.t(this.props.errors.name)}
          />

          <TextField
            fullWidth
            label={`${this.props.t('imageUrl')}:`}
            margin="normal"
            name="image"
            type="url"
            onChange={this.props.handleChange}
            onBlur={this.props.handleBlur}
            value={this.props.values.image}
            error={Boolean(this.props.errors.image)}
            helperText={this.props.errors.image && this.props.t(this.props.errors.image)}
          />

          <FormControl>
            <InputLabel id="game-edit-form-platform-label">{this.props.t('platform')}</InputLabel>
            <Select
              name="platformId"
              labelId="game-edit-form-platform-label"
              value={this.props.values.platformId}
              onBlur={this.props.handleBlur}
              onChange={this.props.handleChange}
            >
              {this.props.platforms.map(platform => {
                return (
                  <MenuItem value={platform.id} key={platform.id}>
                    {platform.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>

          <TextField
            fullWidth
            type="number"
            label={`${this.props.t('numberOfHoursToComplete')}:`}
            margin="normal"
            name="numberOfHoursToComplete"
            onChange={this.props.handleChange}
            onBlur={this.props.handleBlur}
            value={this.props.values.numberOfHoursToComplete}
            error={Boolean(this.props.errors.numberOfHoursToComplete)}
            helperText={
              this.props.errors.numberOfHoursToComplete &&
              this.props.t(this.props.errors.numberOfHoursToComplete, { min: 0 })
            }
          />

          <TextField
            fullWidth
            type="number"
            label={`${this.props.t('priority')}:`}
            margin="normal"
            name="priority"
            onChange={this.props.handleChange}
            onBlur={this.props.handleBlur}
            value={this.props.values.priority}
            error={Boolean(this.props.errors.priority)}
            helperText={
              this.props.errors.priority &&
              this.props.t(this.props.errors.priority, { min: 0, max: 10 })
            }
          />

          <TextField
            fullWidth
            type="number"
            label={`${this.props.t('hoursPlayed')}:`}
            margin="normal"
            name="numberOfHoursPlayed"
            onChange={this.props.handleChange}
            onBlur={this.props.handleBlur}
            value={this.props.values.numberOfHoursPlayed}
            error={Boolean(this.props.errors.numberOfHoursPlayed)}
            helperText={
              this.props.errors.numberOfHoursPlayed &&
              this.props.t(this.props.errors.numberOfHoursPlayed, { min: 0 })
            }
          />

          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                name="isComplete"
                onChange={this.props.handleChange}
                checked={this.props.values.isComplete}
                value={this.props.values.isComplete}
              />
            }
            label={this.props.t('complete')}
            labelPlacement="end"
          />
        </Paper>
      </form>
    );
  }
}
